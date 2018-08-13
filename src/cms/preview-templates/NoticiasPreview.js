import React from 'react'
import PropTypes from 'prop-types'
import { NoticiaTemplate } from '../../templates/noticia'

const NoticiaPreview = ({ entry, widgetFor }) => (
  <NoticiaTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
)

NoticiaPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default NoticiaPreview
