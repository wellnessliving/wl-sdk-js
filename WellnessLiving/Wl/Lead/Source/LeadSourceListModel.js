/**
 * Retrieves a list of Lead Sources.
 *
 * This model is generated automatically based on API.
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
   * @property {?number} i_sort Sorting order. Only used in the Lead Source widget option. `null` is a temporary value that exists for
   * a short time during the process of inserting of a new row.
   * @property {?number} id_lead_source System-defined Lead Source ID. One of the {@link Wl_Lead_Source_LeadSourceSid} constants.
   * `null` if it is a custom Lead Source.
   * @property {boolean} is_add_lead `true` if this skin will be used for "Add Lead" form or `false` otherwise.
   * Only one skin in the business can be used for "Add Lead" form.
   * @property {boolean} is_select Determines whether Lead Source selected for the user {@link Wl_Lead_Source_LeadSourceListModel.uid}.
   * `true` if {@link Wl_Lead_Source_LeadSourceListModel.uid} is not null and Lead Source is selected for this user.
   * `false` - otherwise.
   * @property {boolean} is_use Determines whether Lead Source is being used.
   * `true` if Lead Source is being used. `false` - otherwise.
   * @property {string} k_lead_source Key of the lead source.
   * @property {string} k_skin Key of the lead skin.
   * @property {string} text_title Name of the Lead Source.
   */

  /**
   * List of Lead Sources.
   *
   * <dl>
   *   <dt>int|null <var>i_sort</var></dt>
   *   <dd>
   *     Sorting order. Only used in the Lead Source widget option. `null` is a temporary value that exists for
   *     a short time during the process of inserting of a new row.
   *   </dd>
   *
   *   <dt>int|null <var>id_lead_source</var></dt>
   *   <dd>
   *     System-defined Lead Source ID. One of the {@link Wl_Lead_Source_LeadSourceSid} constants.
   *     `null` if it is a custom Lead Source.
   *   </dd>
   *
   *   <dt>bool <var>is_add_lead</var></dt>
   *   <dd>
   *     `true` if this skin will be used for "Add Lead" form or `false` otherwise.
   *     Only one skin in the business can be used for "Add Lead" form.
   *   </dd>
   *
   *   <dt>bool <var>is_use</var></dt>
   *   <dd>
   *     Determines whether Lead Source is being used.
   *     `true` if Lead Source is being used. `false` - otherwise.
   *   </dd>
   *
   *   <dt>string <var>k_lead_source</var></dt>
   *   <dd>
   *     Key of the lead source.
   *   </dd>
   *
   *   <dt>string <var>k_skin</var></dt>
   *   <dd>
   *     Key of the lead skin.
   *   </dd>
   *
   *   <dt>string <var>text_title</var></dt>
   *   <dd>
   *     Name of the Lead Source.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Lead_Source_LeadSourceListModel_a_lead_source[]}
   */
  this.a_lead_source = [];

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Lead Source field title.
   *
   * @get result
   * @type {string}
   */
  this.text_lead_source_field = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Lead_Source_LeadSourceListModel);

/**
 * @inheritDoc
 */
Wl_Lead_Source_LeadSourceListModel.prototype.config=function()
{
  return {"a_field": {"a_lead_source": {"get": {"result": true}},"k_business": {"get": {"get": true}},"text_lead_source_field": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Lead_Source_LeadSourceListModel.instanceGet
 * @param {string} k_business Business key.
 * @returns {Wl_Lead_Source_LeadSourceListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */