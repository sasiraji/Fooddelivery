# Project Context

## Overview

This is a modern food delivery web application built using React, Vite, and Node.js. The application features a responsive design, real-time cart management, and secure payment processing.

## Project Structure

```
Fooddelivery-main/
├── src/
│   ├── assets/           # Static assets (images, icons)
│   │   ├── AppDownload/  # App download section
│   │   ├── Cart/         # Cart component
│   │   ├── ExploreMenu/  # Menu exploration
│   │   ├── FoodDisplay/  # Food item display
│   │   ├── Footer/       # Footer component
│   │   ├── Header/       # Header component
│   │   ├── LoginPopup/   # Login modal
│   │   └── Navbar/       # Navigation bar
│   │
│   ├── Context/          # React Context providers
│   │   └── StoreContext.jsx
│   │
│   ├── pages/            # Main application pages
│   │   ├── Cart/         # Cart page
│   │   ├── Home/         # Home page
│   │   ├── MyOrders/     # Order history
│   │   ├── PlaceOrder/   # Checkout page
│   │   └── Verify/       # Payment verification
│   │
│   ├── App.jsx           # Main application component
│   └── main.jsx          # Application entry point
│
├── public/               # Public assets
└── package.json          # Project dependencies
```

## Naming Conventions

- Components: PascalCase (e.g., `AppDownload.jsx`)
- CSS files: Same as component name (e.g., `AppDownload.css`)
- Context files: PascalCase with Context suffix (e.g., `StoreContext.jsx`)
- Page components: PascalCase in their respective folders

## Authentication

- JWT-based authentication system
- Token stored in localStorage
- Protected routes for authenticated users
- Login popup for user authentication

## API Integration

- Base URL: `http://localhost:4000`
- Key Endpoints:
  - `POST /api/order/place`: Place new order
  - `POST /api/order/verify`: Verify payment
  - `POST /api/order/userorders`: Fetch user orders
  - `POST /api/order/placecod`: Place COD order

## State Management

The application uses React Context for state management with the following key features:

- Cart management with localStorage persistence
- User authentication state
- Food menu and items state
- Currency and delivery charge configuration

## Git Repository

- Repository: [Aryas-Fooddelivery](https://github.com/sasiraji/Fooddelivery)
- Branch: main
- Latest Version: v1-orginal
- Backup Location: Project-Back-Ups/Aryas-Fooddelivery-main-18042025-v1-orginal

## Development Guidelines

1. **Code Style**

   - Use functional components with hooks
   - Follow React best practices
   - Maintain consistent code formatting

2. **State Management**

   - Use Context for global state
   - Implement proper error handling
   - Maintain loading states

3. **UI/UX**

   - Responsive design for all screen sizes
   - Consistent styling using CSS modules
   - Clear user feedback for actions

4. **Performance**
   - Optimize image loading
   - Implement lazy loading for components
   - Minimize unnecessary re-renders

## Deployment

- Frontend: Vite-based build
- Backend: Node.js server
- Environment: Development (localhost:4000)
- Build Command: `npm run build`

## Dependencies

Key dependencies include:

- React
- React Router
- Axios
- React Toastify
- Vite
- Terser (for production builds)

# Store Context Documentation

## Overview

The Store Context (`StoreContext.jsx`) is a React Context that manages the global state of the food delivery application. It provides a centralized way to handle cart operations, user authentication, and other shared state across components.

## Context Structure

### State Variables

```javascript
const [cartItems, setCartItems] = useState({});
const [food_list, setFoodList] = useState([]);
const [menu_list, setMenuList] = useState([]);
const [token, setToken] = useState(localStorage.getItem("token"));
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
const [url] = useState("http://localhost:4000");
const [currency] = useState("$");
const [deliveryCharge] = useState(5);
```

### Key Functions

1. **Cart Management**

   - `addToCart(itemId)`: Adds an item to the cart
   - `removeFromCart(itemId)`: Removes an item from the cart
   - `getTotalCartAmount()`: Calculates the total amount of items in the cart
   - `loadCartData({ token })`: Loads cart data from server or local storage

2. **State Management**
   - `setToken(token)`: Updates the authentication token
   - `setCartItems(items)`: Updates the cart items

## Usage

### Accessing the Context

```javascript
import { StoreContext } from "../../Context/StoreContext";

const MyComponent = () => {
  const {
    cartItems,
    food_list,
    token,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  } = useContext(StoreContext);

  // Use the context values and functions
};
```

### Provider Setup

The context provider is set up in `App.jsx`:

```javascript
import StoreContextProvider from "./Context/StoreContext";

const App = () => {
  return (
    <StoreContextProvider>{/* Application components */}</StoreContextProvider>
  );
};
```

## Key Features

1. **Cart Management**

   - Persistent cart storage using localStorage
   - Real-time cart updates
   - Total amount calculation including delivery charges

2. **Authentication**

   - Token-based authentication
   - Automatic token persistence
   - Protected route handling

3. **API Integration**
   - Centralized API endpoint configuration
   - Consistent currency formatting
   - Standardized delivery charge handling

## Best Practices

1. **Accessing Context**

   - Use the context only in components that need it
   - Destructure only the required values and functions
   - Consider using custom hooks for complex context usage

2. **State Updates**

   - Use the provided setter functions for state updates
   - Avoid direct state mutations
   - Handle loading and error states appropriately

3. **Performance**
   - Memoize components that use context to prevent unnecessary re-renders
   - Split context into smaller contexts if needed for better performance
   - Use the `useMemo` hook for expensive calculations

## Example Usage

### Cart Component

```javascript
const Cart = () => {
  const {
    cartItems,
    food_list,
    removeFromCart,
    getTotalCartAmount,
    currency,
    deliveryCharge,
  } = useContext(StoreContext);

  return (
    <div>
      {/* Cart items display */}
      <div>
        Total: {currency}
        {getTotalCartAmount()}
      </div>
      <div>
        Delivery: {currency}
        {deliveryCharge}
      </div>
    </div>
  );
};
```

### Place Order Component

```javascript
const PlaceOrder = () => {
  const { token, getTotalCartAmount, setCartItems } = useContext(StoreContext);

  const handleOrder = async () => {
    if (!token) {
      // Handle authentication
      return;
    }
    // Process order
    setCartItems({}); // Clear cart after successful order
  };
};
```

## Development Challenges & Solutions

### 1. Merge Conflicts

Several merge conflicts were encountered and resolved during development:

1. **Home.jsx Conflict**

   - Issue: Duplicate component definitions in the same file
   - Solution: Kept one version since both were identical
   - Location: `src/pages/Home/Home.jsx`

2. **Cart.jsx Conflict**

   - Issue: Conflicting implementations of cart functionality
   - Solution: Merged best features from both versions, incorporating improved error handling and image handling
   - Location: `src/pages/Cart/Cart.jsx`

3. **PlaceOrder.jsx Conflict**

   - Issue: Different implementations of order placement logic
   - Solution: Combined backend integration and payment options from one version with UI improvements from another
   - Location: `src/pages/PlaceOrder/PlaceOrder.jsx`

4. **Verify.jsx Conflict**

   - Issue: Duplicate code blocks
   - Solution: Removed merge conflict markers as both versions were identical
   - Location: `src/pages/Verify/Verify.jsx`

5. **MyOrders.jsx Conflict**

   - Issue: Different approaches to order display
   - Solution: Merged implementations while maintaining correct assets import
   - Location: `src/pages/MyOrders/MyOrders.jsx`

6. **AppDownload.jsx Conflict**
   - Issue: Different image handling approaches
   - Solution: Kept correct assets import and added better accessibility with alt text
   - Location: `src/components/AppDownload/AppDownload.jsx`

### 2. CSS Conflicts

Multiple CSS files had merge conflicts that were resolved:

1. **Verify.css**

   - Issue: Conflicting spinner animations
   - Solution: Kept the more performant animation implementation
   - Location: `src/pages/Verify/Verify.css`

2. **PlaceOrder.css**

   - Issue: Conflicting form layouts
   - Solution: Combined responsive design elements from both versions
   - Location: `src/pages/PlaceOrder/PlaceOrder.css`

3. **MyOrders.css**

   - Issue: Different grid layouts for order display
   - Solution: Implemented a responsive grid that works across screen sizes
   - Location: `src/pages/MyOrders/MyOrders.css`

4. **Cart.css**

   - Issue: Conflicting cart item layouts
   - Solution: Merged best practices from both versions for better UX
   - Location: `src/pages/Cart/Cart.css`

5. **AppDownload.css**
   - Issue: Different platform button styles
   - Solution: Combined hover effects and responsive sizing
   - Location: `src/components/AppDownload/AppDownload.css`

### 3. Build Process Issues

1. **Terser Not Found**

   - Issue: Build failed due to missing terser dependency
   - Solution: Installed terser as a development dependency
   - Command: `npm install terser --save-dev`

2. **Context Export Issues**

   - Issue: "StoreContext is not exported" error
   - Problem: Inconsistent exports between StoreContext.jsx and imports
   - Solution:
     - Modified StoreContext.jsx to export StoreContext directly
     - Updated imports in all components to use the correct export
     - Ensured StoreContextProvider is the default export

3. **Component Loading**
   - Issue: Lazy loading components causing initial load flicker
   - Solution: Added Suspense with loading spinner
   - Location: `src/App.jsx`

### 4. State Management Challenges

1. **Cart Persistence**

   - Issue: Cart items not persisting between page refreshes
   - Solution: Implemented localStorage integration in StoreContext
   - Location: `src/Context/StoreContext.jsx`

2. **Token Management**
   - Issue: Authentication token not properly persisting
   - Solution: Added proper token storage and retrieval in StoreContext
   - Location: `src/Context/StoreContext.jsx`

### 5. Performance Optimizations

1. **Image Loading**

   - Issue: Large images causing slow page loads
   - Solution: Implemented lazy loading and image optimization
   - Location: Various components using images

2. **Component Re-renders**
   - Issue: Unnecessary re-renders in cart components
   - Solution: Implemented proper memoization and state management
   - Location: `src/pages/Cart/Cart.jsx`

### Lessons Learned

1. Always maintain consistent export patterns across the application
2. Implement proper error boundaries for better error handling
3. Use proper version control practices to minimize merge conflicts
4. Optimize images and assets during development
5. Implement proper loading states for better UX
6. Use proper state management patterns to avoid unnecessary re-renders

## Advanced Technical Implementation Details

### 1. React Performance Optimization Techniques

1. **Code Splitting & Lazy Loading**

   ```javascript
   // Implementation in App.jsx
   const Home = lazy(() => import("./pages/Home/Home"));
   const Cart = lazy(() => import("./pages/Cart/Cart"));

   // Usage with Suspense
   <Suspense fallback={<LoadingSpinner />}>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/cart" element={<Cart />} />
     </Routes>
   </Suspense>;
   ```

2. **Memoization Strategies**

   ```javascript
   // Component memoization
   const MemoizedCartItem = React.memo(({ item, onRemove }) => {
     return (
       <div className="cart-item">
         <img src={item.image} alt={item.name} />
         <button onClick={() => onRemove(item.id)}>Remove</button>
       </div>
     );
   });

   // Callback memoization
   const handleRemove = useCallback(
     (itemId) => {
       removeFromCart(itemId);
     },
     [removeFromCart]
   );
   ```

### 2. State Management Architecture

1. **Context Optimization**

   ```javascript
   // StoreContext.jsx
   const StoreContext = createContext(null);

   export const useStore = () => {
     const context = useContext(StoreContext);
     if (!context) {
       throw new Error("useStore must be used within a StoreProvider");
     }
     return context;
   };
   ```

2. **State Persistence Strategy**

   ```javascript
   // LocalStorage integration
   useEffect(() => {
     const savedCart = localStorage.getItem("cart");
     if (savedCart) {
       setCartItems(JSON.parse(savedCart));
     }
   }, []);

   useEffect(() => {
     localStorage.setItem("cart", JSON.stringify(cartItems));
   }, [cartItems]);
   ```

### 3. Error Handling & Recovery

1. **Global Error Boundary**

   ```javascript
   // ErrorBoundary.jsx
   class ErrorBoundary extends React.Component {
     state = { hasError: false, error: null };

     static getDerivedStateFromError(error) {
       return { hasError: true, error };
     }

     componentDidCatch(error, errorInfo) {
       // Log error to monitoring service
       console.error("Error caught by boundary:", error, errorInfo);
     }

     render() {
       if (this.state.hasError) {
         return <ErrorFallback error={this.state.error} />;
       }
       return this.props.children;
     }
   }
   ```

2. **API Error Handling**
   ```javascript
   // API call wrapper
   const apiCall = async (endpoint, options = {}) => {
     try {
       const response = await axios({
         url: `${BASE_URL}${endpoint}`,
         ...options,
         headers: {
           Authorization: `Bearer ${token}`,
           ...options.headers,
         },
       });
       return response.data;
     } catch (error) {
       if (error.response?.status === 401) {
         // Handle unauthorized
         handleUnauthorized();
       }
       throw error;
     }
   };
   ```

### 4. Security Best Practices

1. **Token Management**

   ```javascript
   // Secure token storage
   const setSecureToken = (token) => {
     try {
       localStorage.setItem("token", token);
       // Set token expiration
       const expiration = new Date();
       expiration.setHours(expiration.getHours() + 24);
       localStorage.setItem("tokenExpiration", expiration.toISOString());
     } catch (error) {
       console.error("Token storage failed:", error);
     }
   };
   ```

2. **Input Sanitization**
   ```javascript
   // Form input sanitization
   const sanitizeInput = (input) => {
     return input
       .replace(/[<>]/g, "") // Remove HTML tags
       .trim() // Remove whitespace
       .slice(0, 255); // Limit length
   };
   ```

### 5. Testing Strategy

1. **Component Testing**

   ```javascript
   // Example test for Cart component
   describe("Cart Component", () => {
     it("should display cart items correctly", () => {
       const { getByText } = render(
         <StoreContext.Provider value={mockContext}>
           <Cart />
         </StoreContext.Provider>
       );
       expect(getByText("Total: $10.00")).toBeInTheDocument();
     });
   });
   ```

2. **Integration Testing**
   ```javascript
   // API integration test
   describe("Order API", () => {
     it("should place order successfully", async () => {
       const orderData = {
         items: [{ id: 1, quantity: 2 }],
         address: mockAddress,
       };
       const response = await placeOrder(orderData);
       expect(response.success).toBe(true);
     });
   });
   ```

### 6. Deployment Pipeline

1. **Build Optimization**

   ```javascript
   // vite.config.js
   export default defineConfig({
     build: {
       minify: "terser",
       sourcemap: false,
       rollupOptions: {
         output: {
           manualChunks: {
             vendor: ["react", "react-dom"],
             utils: ["axios", "react-router-dom"],
           },
         },
       },
     },
   });
   ```

2. **Environment Configuration**
   ```javascript
   // Environment variables
   const env = {
     development: {
       API_URL: "http://localhost:4000",
       ENABLE_LOGGING: true,
     },
     production: {
       API_URL: "https://api.fooddelivery.com",
       ENABLE_LOGGING: false,
     },
   };
   ```

### 7. Monitoring & Analytics

1. **Error Tracking**

   ```javascript
   // Error logging utility
   const logError = (error, context = {}) => {
     console.error("Application Error:", {
       error: error.message,
       stack: error.stack,
       context,
       timestamp: new Date().toISOString(),
     });
     // Send to error tracking service
   };
   ```

2. **Performance Monitoring**
   ```javascript
   // Performance metrics
   const measurePerformance = () => {
     const metrics = {
       loadTime: performance.now(),
       memoryUsage: performance.memory,
       networkRequests: performance.getEntriesByType("resource"),
     };
     // Send to analytics service
   };
   ```

### 8. Future Improvements

1. **Technical Debt Reduction**

   - Implement TypeScript for better type safety
   - Add comprehensive test coverage
   - Refactor legacy components to use hooks
   - Implement proper state management with Redux Toolkit

2. **Feature Enhancements**

   - Real-time order tracking
   - Push notifications
   - Offline support with Service Workers
   - Advanced search and filtering
   - Multi-language support

3. **Performance Targets**
   - First Contentful Paint < 1.5s
   - Time to Interactive < 3s
   - Largest Contentful Paint < 2.5s
   - Cumulative Layout Shift < 0.1

## Repository Information

- Remote Repository: [Aryas-Fooddelivery](https://github.com/sasiraji/Fooddelivery)
- Branch: main
- Deployment URL: [fooddelivery-nu-inky.vercel.app](https://fooddelivery-nu-inky.vercel.app)

## Deployment Instructions

### Local Development

1. Clone the repository:

   ```bash
   git clone https://github.com/sasiraji/Fooddelivery.git
   cd Fooddelivery
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start development server:

   ```bash
   npm run dev
   ```

4. Access the application at: `http://localhost:5173`

### Remote Deployment

1. Push changes to GitHub:

   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. The application will automatically deploy to Vercel at: [fooddelivery-nu-inky.vercel.app](https://fooddelivery-nu-inky.vercel.app)

### Development Workflow

1. Make changes locally
2. Test changes in development environment
3. Commit changes with descriptive messages
4. Push to remote repository
5. Verify deployment on Vercel

### Environment Configuration

- Development: `http://localhost:5173`
- Production: `https://fooddelivery-nu-inky.vercel.app`
- API Base URL: `http://localhost:4000` (development)
- API Base URL: `https://api.fooddelivery.com` (production)

# Development and Deployment Practices

## Automatic Deployment Process

After every significant change or feature update, the following steps should be automatically performed:

1. Local Deployment:

   - Kill any existing development servers
   - Clean install dependencies if needed
   - Start development server
   - Verify changes locally

2. Git Repository Update:

   - Stage all changes
   - Create meaningful commit message
   - Push to repository
   - Verify push success

3. When to Skip:
   - Only skip these steps if explicitly mentioned by the user
   - When making rapid consecutive changes that are part of the same feature

## Commit Message Format

Commit messages should follow this format:

```
[Category]: Brief description

- Detailed change 1
- Detailed change 2
```

Categories:

- UI: Visual changes
- Feature: New functionality
- Fix: Bug fixes
- Refactor: Code improvements
- Docs: Documentation updates
