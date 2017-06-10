import React, { PropTypes } from 'react'
import { Text } from 'react-native'
import { FormattedTime } from 'react-intl'

interface Props {
    style: string,
    value: any
}

export default (props: Props) => (
  <FormattedTime {...props}>
    {(localized: string) => <Text style={props.style}>{localized}</Text>}
  </FormattedTime>
)
