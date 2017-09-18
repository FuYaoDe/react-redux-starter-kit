import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import { connect } from 'react-redux'

// export const PageLayout = (props) => {
class PageLayout extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className='container text-center'>
        <h1>React Redux Starter Kit</h1>
        <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
        {' · '}
        <Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link>
        {' · '}
        <Link to='/sample' activeClassName='page-layout__nav-item--active'>Sample</Link>
        {' · '}
        <Link to='/sample2' activeClassName='page-layout__nav-item--active'>Sample2</Link>
        <div className='page-layout__viewport'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
// PageLayout.propTypes = {
//   children: PropTypes.node,
// }
const mapDispatchToProps = {}

const mapStateToProps = (state) => ({
  sample : state.sample,
  sample2 : state.sample2
})

export default connect(mapStateToProps, mapDispatchToProps)(PageLayout)
