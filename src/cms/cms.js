import CMS from 'netlify-cms'

import PagePreview from './preview-templates/PagePreview'
import NoticiasPreviewd from './preview-templates/NoticiasPreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('page', PagePreview)
CMS.registerPreviewTemplate('noticias', NoticiasPreviewd)
