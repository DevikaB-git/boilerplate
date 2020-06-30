/**
 *
 * MainPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeEventsSelector, makeFeaturedEventsSelector } from './selectors';
import { loadFeaturedEvents, loadEvents } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class MainPage extends React.Corponent {
  componentDidMount() {
    loadEvents('12121', 0, 15, '');
    loadFeaturedEvents('12121', 0, 5);
  }

  render() {
    console.log(this.props.featuredEvents);
    const featuredEvents = { ...this.props.featuredEvents };
    // console.log('Featured', featuredEvents);
    const events = { ...this.props.events };
    // console.log('Events', events);
    return (
      <div>
        <Helmet>
          <title>MainPage</title>
          <meta name="Description" content="Description of mainPage" />
        </Helmet>
      </div>
    );
  }
}

MainPage.propTypes = {
  featuredEvents: propTypes.array,
  events: propTypes.array,
};

const mapStateToProps = createStructuredSelector({
  featuredEvents: makeFeaturedEventsSelector(),
  events: makeEventsSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadEvents: (tenantId, skip, take, searchTerm) =>
      dispatch(loadEvents(tenantId, skip, take, searchTerm)),

    loadFeaturedEvents: (tenantId, skip, take) =>
      dispatch(loadFeaturedEvents(tenantId, skip, take)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(MainPage);
