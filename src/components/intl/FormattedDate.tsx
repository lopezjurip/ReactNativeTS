import React from 'react'
import { Text } from 'react-native'
import { FormattedDate } from 'react-intl'

interface Props {
    style: string,
    value: any
}

export default (props: Props) => (
  <FormattedDate {...props}>
    {(localized: string) => <Text style={props.style}>{localized}</Text>}
  </FormattedDate>
)
