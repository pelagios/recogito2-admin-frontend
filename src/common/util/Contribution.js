import React from 'react';

const ITEM_TYPE_LABELS = {
  PLACE_BODY: 'place'
};

const uriToLink = (uri) => {
  return uri; // TODO
}

export const format = (contribution) => {

  const action = contribution.action;
      
  const user = <a href={`/${contribution.made_by}`}>{contribution.made_by}</a>;

  const itemType = contribution.affects_item.item_type;

  const itemTypeLabel = ITEM_TYPE_LABELS[itemType];

  const valBefore = contribution.affects_item.value_before;

  const valBeforeShort = (valBefore && valBefore.length > 256) ? 
    `${valBefore.substring(0, 256)}...` : valBefore;

  const valAfter = contribution.affects_item.value_after;

  const valAfterShort = (valAfter && valAfter.length > 256) ? 
    `${valAfter.substring(0, 256)}...` : valAfter;

  const annotationUri = `/annotation/${contribution.affects_item.annotation_id}`;

  const context = (contribution.context) ? 
    <em>&raquo;<a href={annotationUri}>{contribution.context}&laquo;</a></em> : false;

  if (action === 'CREATE_BODY' && itemType === 'QUOTE_BODY') {
    return <span>{user} highlighted section {context}</span>;
  } else if (action === 'CREATE_BODY' && itemType === 'COMMENT_BODY') {
    return <span>New comment by {user} <em>&raquo;{valAfterShort}&laquo;</em></span>;
  } else if (action === 'CREATE_BODY' && itemType === 'TRANSCRIPTION_BODY') {
    return <span>{user} added transcription <em>&raquo;{valAfter}&laquo;</em></span>;
  } else if (action === 'CREATE_BODY' && itemType === 'TAG_BODY') {
    return <span>{user} tagged {context} with <em>&raquo;{valAfter}&laquo;</em></span>;
  } else if (action === 'CREATE_BODY') {
    return <span>{user} tagged {context} as {itemTypeLabel}</span>;
  } else if (action === 'CONFIRM_BODY') {
    return <span>{user} confirmed {context} as {itemTypeLabel} {uriToLink(valAfter)}</span>;
  } else if (action === 'FLAG_BODY') {
    return <span>{user} flagged {itemTypeLabel} {context}</span>;
  } else if (action === 'EDIT_BODY' && itemType === 'QUOTE_BODY') {
    return <span>{user} changed selection from <em>&raquo;{valBeforeShort}&laquo;</em> to <em>&raquo;{valAfterShort}&laquo;</em></span>;
  } else if (action === 'EDIT_BODY' && itemType === 'PLACE_BODY') {
    return <span>{user} changed {itemTypeLabel} from {uriToLink(valBefore)} to {uriToLink(valAfter)}</span>;
  } else if (action === 'DELETE_ANNOTATION') {
    return <span>{user} deleted annotation <em>&raquo;{contribution.context}&laquo;</em></span>;
  } else if (action === 'CREATE_RELATION_BODY') {
    return <span>{user} created relation <em>&raquo;{valAfter}&laquo;</em></span>;
  } else if (action === 'EDIT_RELATION_BODY') {
    return <span>{user} changed relation from <em>&raquo;{valBefore}&laquo;</em> to <em>&raquo;{valAfter}&laquo;</em></span>;
  } else if (action === 'DELETE_RELATION') {
    return <span>{user} deleted relation <em>&raquo;{valBefore}&laquo;</em></span>;
  } else {
    return <span>An unknown change happend</span>;
  }

}