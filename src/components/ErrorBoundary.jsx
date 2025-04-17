import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
        console.error("Error caught by boundary:", error, errorInfo);
    }

    handleRetry = () => {
        this.setState({
            hasError: false,
            error: null,
            errorInfo: null
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ 
                    padding: '20px', 
                    textAlign: 'center',
                    maxWidth: '600px',
                    margin: '0 auto'
                }}>
                    <h2 style={{ color: '#ff4444' }}>Something went wrong.</h2>
                    <p>Please try refreshing the page or contact support if the problem persists.</p>
                    <button 
                        onClick={this.handleRetry}
                        style={{
                            padding: '10px 20px',
                            margin: '10px',
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Retry
                    </button>
                    {process.env.NODE_ENV === 'development' && (
                        <div style={{ 
                            marginTop: '20px',
                            padding: '10px',
                            backgroundColor: '#f8f8f8',
                            borderRadius: '4px',
                            textAlign: 'left'
                        }}>
                            <h4>Error Details:</h4>
                            <pre style={{ whiteSpace: 'pre-wrap' }}>
                                {this.state.error && this.state.error.toString()}
                            </pre>
                        </div>
                    )}
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary; 