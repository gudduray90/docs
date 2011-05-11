// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

Docs.SearchResultItemView = SC.View.design({
  layerIsCacheable: YES,
  isPoolable: YES,

  render: function(context, firstTime) {
    context.push(this.get('content').get('searchNameMarkup'));
  }
});
