/**
 * Gets list of Lead Sources.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Lead_Source_LeadSourceListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * @typedef {{}} Wl_Lead_Source_LeadSourceListModel_a_lead_source
   * @property {?number} i_sort Sorting order. Only used in the Lead Source widget option. `null` is a temporary value that exists for a short time during the process of inserting of a new row.
   * @property {number} id_lead_source System-defined Lead Source ID. One of the {@link Wl_Mode_ModeSid} constants. `null` if it is a custom Lead Source.
   * @property {boolean} is_add_lead `true` if this skin will be used for "Add Lead" form or `false` otherwise. Only one skin in the business can be used for "Add Lead" form.  Not available if current user is not a staff member or admin.
   * @property {boolean} is_use Determines whether Lead Source is being used. `true` if Lead Source is being used. `false` - otherwise.  Not available if current user is not a staff member or admin.
   * @property {string} k_lead_source Key of the lead source.
   * @property {string} k_skin Key of the lead skin.  Not available if current user is not a staff member or admin.
   * @property {string} text_title Name of the Lead Source.
   */

  /**
   * List of Lead Sources.
   *
   * @get result
   * @type {Wl_Lead_Source_LeadSourceListModel_a_lead_source[]}
   */
  this.a_lead_source = undefined;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Lead_Source_LeadSourceListModel);

/**
 * @inheritDoc
 */
Wl_Lead_Source_LeadSourceListModel.prototype.config=function()
{
  return {"a_field":{"a_lead_source":{"get":{"result":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Lead_Source_LeadSourceListModel.instanceGet
 * @param {string} k_business Business key.
 * @returns {Wl_Lead_Source_LeadSourceListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets list of Lead Sources.
 *
 * Returns all lead sources configured for the specified business, including system-defined and custom sources,
 * with sort order, title, associated skin, and flags indicating whether each source is currently in use.
 * This is public endpoint, which is available for non-signed-in users. But if the user is not signed in,
 * the list will be filtered to contain only those sources that are available for the user and with limited information.
 *
 * @function
 * @name Wl_Lead_Source_LeadSourceListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
