import React from 'react';

export default class ThemeSwitch extends React.PureComponent {
    state = {
        active: true,
    };

    store = (typeof localStorage === 'undefined') ? null : localStorage;
    css = `
        html { filter: invert(100%); background: #d6d3cb; }
        * { background-color: inherit }
        img:not([src*=".svg"]), video { filter: invert(100%) }
    `;

    invertSupported(property, value) {
        const prop = property + ':',
            el = document.createElement('test'),
            mStyle = el.style;
        el.style.cssText = prop + value;

        return mStyle[property];
    }

    componentDidMount() {
        if (this.store) {
            this.setState({
                supported: this.invertSupported('filter', 'invert(100%)'),
                active: this.store.getItem('ThemeSwitch') || false
            });
        }
    }

    componentDidUpdate() {
        if (this.store) {
            this.store.setItem('ThemeSwitch', this.state.active);
        }
    }

    isActive = () => this.state.active;

    toggle = () => {
        this.setState({ active: !this.isActive() });
    }

    render() {
        if (!this.state.supported) {
            return null;
        }
        
        const isActive = this.isActive();

        return (
            <div>
                <button aria-pressed={isActive} onClick={this.toggle}>
                    темная тема:
                    <span aria-hidden="true">
                        {(isActive) ? 'включена' : 'выключена'}
                    </span>
                </button>

                <style media={(isActive) ? 'screen' : 'none'}>
                    {(isActive) ? this.css.trim() : this.css}
                </style>
            </div>
        );
    }
}