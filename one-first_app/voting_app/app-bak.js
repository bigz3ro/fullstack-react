const ProductList = React.createClass({
  getInitialState: function(){
    return {
      products : [],
    };
  },

  componentDidMount: function(){
    this.updateState();
  },

  updateState: function(){
    const products = Data.sort((a,b)=>{
      return a.votes - b.votes;
    });
    this.setState({
      products : products
    });
  },

  handleProductUpVote: function (productId) {
      Data.forEach((el) => {
        if( el.id === productId ){
          el.votes = el.votes + 1;
          return;
        }
      });
      this.updateState();
  },

  handleProductDownVote: function(productId){
    Data.forEach((el) => {
      if( el.id === productId ){
        el.votes = el.votes - 1;
        return;
      }
    });
    this.updateState();
  },

  render: function () {

    /*
    Array’s map method takes a function as an argument.
    It calls this function with each item inside of the array
    (in this case, each object inside Data) and builds a new
    array by using the return value from each function call.
    */
    const products = this.state.products.map((product)=>{
      return (
        <Product
          /*
          Note the use of the key={'product-' + product.id} prop.
          React uses this special property to create unique bindings
          for each instance of the Product component. The key prop is
          not used by our Product component, but by the React framework.
          */
          key={'product-' + product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          url={product.url}
          votes={product.votes}
          submitter_avatar_url={product.submitter_avatar_url}
          product_image_url={product.product_image_url}
          upVote={this.handleProductUpVote}
          downVote={this.handleProductDownVote}
        />
      );
    });
    return (
      <div className='ui items'>
        {products}
      </div>
    );
  },
});




const Product = React.createClass({
  handleUpVote: function () {
      this.props.upVote(this.props.id);
  },
  handleDownVote: function(){
    this.props.downVote(this.props.id);
  },
  render: function () {
    return (
      <div className='item'>
        <div className='image'>
          <img src={this.props.product_image_url} />
        </div>
        <div className='middle aligned content'>
          <div className='header'>
            <a onClick={this.handleUpVote}>
              <i className='large caret up icon'></i>
            </a>
            {this.props.votes}
            <a onClick={this.handleDownVote}>
              <i className='large caret down icon'></i>
            </a>
          </div>
          <div className='description'>
            <a href={this.props.url}>
              {this.props.title}
            </a>
          </div>
          <div className='extra'>
            <span>Submitted by:</span>
            <img
              className='ui avatar image'
              src={this.props.submitter_avatar_url}
            />
          </div>
        </div>
      </div>
    );
  },
});

ReactDOM.render(
  <ProductList />,
  // <sortDirection />,
  document.getElementById('content')
);
