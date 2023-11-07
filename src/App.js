import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Courses from './components/Courses'
// import ProductItemDetails from './components/ProductItemDetails'
import Professor from './components/Professor'
import Classroom from './components/Classroom'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './context/CartContext'

import './App.css'

class App extends Component {
  state = {
    cartList: [],
  }

  //   TODO: Add your code for remove all cart items, increment cart item quantity, decrement cart item quantity, remove cart item

  addProfessorItem = product => {
    this.setState(prevState => ({cartList: [...prevState.cartList, product]}))
    //   TODO: Update the code here to implement addProfessorItem
  }

  render() {
    const {cartList} = this.state

    return (
      <CartContext.Provider
        value={{
          cartList,
          addProfessorItem: this.addProfessorItem,
          removeProfessorItem: this.removeProfessorItem,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/courses" component={Courses} />
          {/* <ProtectedRoute
            exact
            path="/products/:id"
            component={ProductItemDetails}
          /> */}
          <ProtectedRoute exact path="/professors" component={Professor} />
          <ProtectedRoute exact path="/classrooms" component={Classroom} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
