<<<<<<< HEAD
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
        return { hasError: true };
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

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    padding: '20px',
                    margin: '20px',
                    border: '1px solid #ff6b6b',
                    borderRadius: '4px',
                    backgroundColor: '#fff5f5'
                }}>
                    <h2>Something went wrong</h2>
                    <p>We're sorry, but something went wrong. Please try refreshing the page.</p>
                    {process.env.NODE_ENV === 'development' && (
                        <details style={{ whiteSpace: 'pre-wrap' }}>
                            {this.state.error && this.state.error.toString()}
                            <br />
                            {this.state.errorInfo && this.state.errorInfo.componentStack}
                        </details>
                    )}
                    <button
                        onClick={() => window.location.reload()}
                        style={{
                            marginTop: '10px',
                            padding: '8px 16px',
                            backgroundColor: '#ff6b6b',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Refresh Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

=======
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

>>>>>>> 654e5f637d09ea247cc9544d678011ed88cca846
export default ErrorBoundary; 