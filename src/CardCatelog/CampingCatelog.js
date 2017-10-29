import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './Actions';

class CampingCatelog extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      inputValue: ""
    };

    this.updateInputValue = this.updateInputValue.bind(this);
    this.addClick = this.addClick.bind(this);
  }

  // componentWillMount() {
  //   fetch(`/api?id=${keyword}`)
  // }

  updateInputValue(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  addClick() {
    console.log('hi');
    this.props.actions.createCourse({
      title: this.state.inputValue
    });
  }

  courseMapping(course, idx) {
    return (
      <div key={idx}>{course.title}</div>
    );
  }

  render() {
    return (
      <div>
        <h1>Camping</h1>
        {this.props.courses.map(this.courseMapping)}
        <input type={'text'} onChange={this.updateInputValue}/>
        <button onClick={this.addClick}>Add Course</button>
      </div>
    );
  }

}

CampingCatelog.propTypes = {
  courses: PropTypes.array
};

const mapStateToProps = (state, ownProps) => (
  {
    courses: state.courses
  }
);

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CampingCatelog);
