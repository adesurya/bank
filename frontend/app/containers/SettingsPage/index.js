/**
 *
 * SettingsPage
 *
 */

import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import ContainerWrapper from 'components/App/ContainerWrapper';
import Copyright from 'components/App/Copyright';
import SettingsForm from 'components/App/SettingsForm';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function SettingsPage() {
  useInjectReducer({ key: 'settingsPage', reducer });
  useInjectSaga({ key: 'settingsPage', saga });

  return (
    <Fragment>
      <FormattedMessage {...messages.helmetSettingsTitle}>
        {title => <Helmet title={title} />}
      </FormattedMessage>

      <ContainerWrapper>
        <SettingsForm />
      </ContainerWrapper>

      <Copyright />
    </Fragment>
  );
}

export default SettingsPage;