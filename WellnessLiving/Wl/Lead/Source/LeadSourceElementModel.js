/**
 * Deletes custom source lead.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @deprecated Use {@link _Wl_Lead_LeadPageModel.post()} instead. Will be removed after WL-89292 done.
 */
function Wl_Lead_Source_LeadSourceElementModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Lead_Source_LeadSourceElementModel_a_lead_source
   * @property {number} i_sort Sorting order.
   * @property {number} id_lead_source System-defined Lead Source ID. One of {@link Wl_Mode_ModeSid} constants. `null` if it is a custom Lead Source.
   * @property {string} k_lead_source Key of the lead source.
   * @property {string} k_skin Key of the lead skin.  Will be set only in case if `id_lead_source` is {@link Wl_Mode_ModeSid} and widget can't be used for "Add Lead" form. `false` - otherwise.
   * @property {string} text_title Name of the Lead Source.
   */

  /**
   * List of Lead Sources.
   *
   * @post post
   * @type {Wl_Lead_Source_LeadSourceElementModel_a_lead_source[]}
   */
  this.a_lead_source = undefined;

  /**
   * Business key.
   *
   * @delete post
   * @post post
   * @put post
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the lead source.
   *
   * @delete post
   * @put result
   * @type {string}
   */
  this.k_lead_source = "";

  /**
   * Key of the lead source.
   *
   * @delete get
   * @type {string}
   */
  this.k_lead_source_replace = "";

  /**
   * Name of new lead source item.
   *
   * @put post
   * @type {string}
   */
  this.text_lead_source = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Lead_Source_LeadSourceElementModel);

/**
 * @inheritDoc
 */
Wl_Lead_Source_LeadSourceElementModel.prototype.config=function()
{
  return {"a_field":{"a_lead_source":{"post":{"post":true}},"k_business":{"delete":{"post":true},"post":{"post":true},"put":{"post":true}},"k_lead_source":{"delete":{"post":true},"put":{"result":true}},"k_lead_source_replace":{"delete":{"get":true}},"text_lead_source":{"put":{"post":true}}}};
};

/**
 * Deletes custom source lead.
 *
 * Removes the specified custom lead source from the business. If a replacement lead source key is provided,
 * all users currently assigned to the deleted source are reassigned to it before deletion.
 *
 * @function
 * @name Wl_Lead_Source_LeadSourceElementModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */

/**
 * Creates or edits a custom source lead.
 *
 * Accepts a list of lead source records and applies bulk create or update operations: new entries without a
 * key are inserted, and existing entries are updated with a new sort order or title.
 *
 * @function
 * @name Wl_Lead_Source_LeadSourceElementModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */

/**
 * Adds one lead source.
 *
 * Creates a single new custom lead source with the given title for the specified business, assigns it the
 * next available sort position, and returns the generated lead source key.
 *
 * @function
 * @name Wl_Lead_Source_LeadSourceElementModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
