/**
 * Retrieves Lead Source element.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Lead_Source_LeadSourceElementModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this.ERROR_SILENT = true;

  /**
   * Special value for {@link Wl_Lead_Source_LeadSourceElementModel.k_lead_source_replace}.
   */
  this.LEAD_SOURCE_REPLACE_NONE = 'none';

  /**
   * @typedef {{}} Wl_Lead_Source_LeadSourceElementModel_a_lead_source
   * @property {number} i_sort Sorting order.
   * @property {?number} id_lead_source System-defined Lead Source ID. One of the {@link Wl\Lead\Source\LeadSourceSql} constants.
   * `null` if it is a custom Lead Source.
   * @property {string} k_lead_source Key of the lead source.
   * @property {*} k_skin Key of the lead skin.
   * Will be set only in case if <tt>id_lead_source</tt> is {@link Wl_Lead_Source_LeadSourceSid.WIDGET} and
   * widget can't be used for "Add Lead" form. `false` - otherwise.
   * @property {string} text_title Name of the Lead Source.
   */

  /**
   * List of Lead Sources.
   *
   * <dl>
   *   <dt>int <var>i_sort</var></dt>
   *   <dd>
   *     Sorting order.
   *   </dd>
   *
   *   <dt>int|null <var>id_lead_source</var></dt>
   *   <dd>
   *     System-defined Lead Source ID. One of the {@link Wl\Lead\Source\LeadSourceSql} constants.
   *     `null` if it is a custom Lead Source.
   *   </dd>
   *
   *   <dt>string <var>k_lead_source</var></dt>
   *   <dd>
   *     Key of the lead source.
   *   </dd>
   *
   *   <dt>string [<var>k_skin</var>]</dt>
   *   <dd>
   *     Key of the lead skin.
   *     Will be set only in case if <var>id_lead_source</var> is {@link Wl_Lead_Source_LeadSourceSid.WIDGET} and
   *     widget can't be used for "Add Lead" form. `false` - otherwise.
   *   </dd>
   *
   *   <dt>string <var>text_title</var></dt>
   *   <dd>
   *     Name of the Lead Source.
   *   </dd>
   * </dl>
   *
   * @post post
   * @type {Wl_Lead_Source_LeadSourceElementModel_a_lead_source[]}
   */
  this.a_lead_source = [];

  /**
   * Business key.
   *
   * @delete post
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the lead source.
   *
   * @delete post
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
   * Lead Source field title.
   *
   * @post get
   * @type {string}
   */
  this.text_lead_source_field = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Lead_Source_LeadSourceElementModel);

/**
 * @inheritDoc
 */
Wl_Lead_Source_LeadSourceElementModel.prototype.config=function()
{
  return {"a_field": {"a_lead_source": {"post": {"post": true}},"k_business": {"delete": {"post": true},"post": {"post": true}},"k_lead_source": {"delete": {"post": true}},"k_lead_source_replace": {"delete": {"get": true}},"text_lead_source_field": {"post": {"get": true}}}};
};