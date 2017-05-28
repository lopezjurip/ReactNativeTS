import React, { PropTypes, isValidElement, createElement } from 'react'
import { Text } from 'react-native'
import { FormattedMessage } from 'react-intl'

interface Props {
    style: string,
    value: any,
    id: string
}

export default (props: Props) => (
  <FormattedMessage {...props}>
    {(...nodes: Array<any>) => {
      const newNodes = nodes.map((node) => {
        if (!isValidElement(node)) {
          return <Text style={props.style}>{node}</Text>
        }
        return node
      })
      return createElement(Text, {style: props.style}, ...newNodes)
    }}
  </FormattedMessage>
)
