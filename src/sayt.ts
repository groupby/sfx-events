/** The name of the event fired when the results of an autocomplete request have been received. */
export const AUTOCOMPLETE_RESULTS_RECEIVED = 'sfx::autocomplete_results_received';
/** The type of the [[AUTOCOMPLETE_RESULTS_RECEIVED]] event payload. */
export interface AutocompleteReceivedResultsPayload {
  /** A list of autocomplete results. */
  results: string[];
  /** The ID of the search box that initiated this request. */
  searchbox?: string;
}

/** The name of the event fired when an autocomplete request fails. */
export const AUTOCOMPLETE_ERROR = 'sfx::autocomplete_error';
/** The type of the [[AUTOCOMPLETE_ERROR]] event payload. */
export type AutocompleteErrorPayload = Error;
