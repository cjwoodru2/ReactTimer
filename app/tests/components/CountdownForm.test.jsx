var expect    = require('expect'),
    React     = require('react'),
    ReactDOM  = require('react-dom'),
    TestUtils = require('react-addons-test-utils'),
    $         = require('jQuery');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
  it('should exist', () => {
      expect(CountdownForm).toExist();
  });
  it('should call onSetCountdown if valid seconds entered', () => {
    var spy = expect.createSpy();
    // using lowercase below since it's an instance of CountdownForm
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = '109';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109)
  });
  it('should not call onSetCountdown if invalid seconds entered', () => {
    var spy = expect.createSpy();
    // using lowercase below since it's an instance of CountdownForm
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = '102b';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled('102b');
  });
});
