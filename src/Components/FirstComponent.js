import React, {component} from 'react';

class FirstComponent extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        const element = (<div>Text from Element</div>)
        return (<div className="comptext">
        <h3>First Component</h3>
            {this.props.displaytext}
            {element}
        </div>)
    }
}

export default FirstComponent