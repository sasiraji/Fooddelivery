import React from 'react';
import { toast } from 'react-toastify';

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
        
        // Log error to console
        console.error("Error caught by boundary:", error, errorInfo);
        
        // Show error toast
        toast.error("Something went wrong. Please try refreshing the page.");
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
                    margin: '0 auto',
                    backgroundColor: '#fff5f5',
                    border: '1px solid #ff6b6b',
                    borderRadius: '4px'
                }}>
                    <h2 style={{ color: '#ff4444' }}>Something went wrong</h2>
                    <p>We're sorry, but something went wrong. Please try refreshing the page or contact support if the problem persists.</p>
                    <div>
                        <button 
                            onClick={() => window.location.reload()}
                            style={{
                                padding: '10px 20px',
                                margin: '10px',
                                backgroundColor: '#ff6b6b',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                        >
                            Refresh Page
                        </button>
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
                    </div>
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
                                <br />
                                {this.state.errorInfo && this.state.errorInfo.componentStack}
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