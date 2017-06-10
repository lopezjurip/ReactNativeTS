import React, { PropTypes } from 'react'
import { Text } from 'react-native'
import { FormattedPlural } from 'react-intl'

interface Props {
    style: "cardinal" | "ordinal" | undefined,
    value: any
}

export default (props: Props) => (
  <FormattedPlural {...props}>
    {(localized: string) => <Text style={props.style}>{localized}</Text>}
  </FormattedPlural>
)
