import React, { Component } from 'react'
import styles from './index.less'
export default class Info extends Component {
    constructor(props) {
        super(props)

        this.state = {
            visible: false
        }
    }

    onClick = () => {
        this.setState({
            visible: !this.state.visible
        })
    }

    render() {
        return (
            <div className={styles.infoBox}>
                <div className={styles.title}>{this.props.title}</div>
                <div className={styles.info}>{this.props.info}
                    <div className={styles.codeBtn} onClick={this.onClick}>&lt;/&gt;</div>
                </div>

                {
                    this.state.visible && <div className={styles.codeBox}>
                        <code>
                            {
                                this.props.code
                            }
                        </code>
                    </div>
                }
            </div>
        )
    }
}
