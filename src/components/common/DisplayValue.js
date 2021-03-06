import withDisplayValueState from '@lumerin/wallet-ui-logic/src/hocs/withDisplayValueState';
import { sanitize } from '@lumerin/wallet-ui-logic/src/utils';
import smartRounder from 'smart-round';
import PropTypes from 'prop-types';
import React from 'react';

export function DisplayValue(props) {
  let formattedValue;

  try {
    formattedValue = this.round(
      props.toWei ? sanitize(props.value) : props.fromWei(props.value),
      props.shouldFormat
    );
  } catch (e) {
    formattedValue = null;
  }

  return <>{props.value}</>;
}

export default withDisplayValueState(DisplayValue);
