import React, { PropTypes } from 'react'
import { Text } from 'react-native'
import { FormattedNumber } from 'react-intl'

interface Props {
    style: any,
    localeMatcher: any,
    formatStyle: string,
    value: any,
    currency: string,
    currencyDisplay: any,
    useGrouping: boolean,
    minimumIntegerDigits: number,
    minimumFractionDigits: number,
    maximumFractionDigits: number,
    minimumSignificantDigits: number,
    maximumSignificantDigits: number
}

export default (props: Props) => {
  const style = props.style

  const formatOptions = {
      ...props,
      style: props.formatStyle
  }

  return (
    <FormattedNumber {...formatOptions}>
      {(localized: string) => <Text style={style}>{localized}</Text>}
    </FormattedNumber>
  )
}
