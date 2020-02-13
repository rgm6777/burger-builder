import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxillary from '../Auxillary/Auxillary';

const withErrorHandler = (WrappedComponent, axios) => {

    return class extends Component  {

        state = {
            error: null
        }

        componentWillMount() {
            axios.interceptors.request.use(request => {
                this.setState({error: null});
                return request;
            })
            axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            })
        }

        errorConfirmedHandler = () =>  {
            this.setState({error: null})
        }

        render () {
            return (
                <Auxillary>
                    <Modal 
                    show={this.state.error}
                    modalClosed={this.state.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Auxillary>
            );
        }
    }

}

export default withErrorHandler;