/**
 * Loads customization data of the customization form that corresponds to specified report / report page.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Report_Customization_CustomizationFormModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "cid_page,cid_report,k_business,k_report_save,s_report,uid_actor";

  /**
   * @typedef {{}} Wl_Report_Customization_CustomizationFormModel_a_customization_form_a_element_a_field
   * @property {string} text_title Localized field title.
   * @property {string} x_value Current field value.
   */

  /**
   * @typedef {{}} Wl_Report_Customization_CustomizationFormModel_a_customization_form_a_element
   * @property {Wl_Report_Customization_CustomizationFormModel_a_customization_form_a_element_a_field} a_field Element fields keyed by field alias. Each field has the following structure:
   * @property {number[]} a_report Report CID list the element applies to.
   * @property {string} html_title Localized element title.
   * @property {string} html_title_tooltip Localized element tooltip.
   */

  /**
   * @typedef {{}} Wl_Report_Customization_CustomizationFormModel_a_customization_form
   * @property {Wl_Report_Customization_CustomizationFormModel_a_customization_form_a_element} a_element Form elements keyed by element name. Each element has the following structure:
   * @property {string} s_form Form class identifier.
   */

  /**
   * Customization form data keyed by report or page CID. Each value has the following structure:
   *
   * @get result
   * @post post
   * @type {Wl_Report_Customization_CustomizationFormModel_a_customization_form}
   */
  this.a_customization_form = undefined;

  /**
   * Report page CID.
   *
   * @get get
   * @post get
   * @type {number}
   */
  this.cid_page = 0;

  /**
   * Report CID.
   *
   * @get get
   * @post get
   * @type {number}
   */
  this.cid_report = 0;

  /**
   * Business primary key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Primary key of a saved report.
   *
   * `null` means that report is not saved.
   *
   * @get get
   * @post get
   * @type {?string}
   */
  this.k_report_save = null;

  /**
   * Report CID list to that page customization form must be converted. String separated with `,`.
   *
   * May be specified only if {@link Wl_Report_Customization_CustomizationFormModel.cid_page} in not empty.
   *
   * @get get
   * @type {string}
   */
  this.s_report = "";

  /**
   * Current user's primary key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid_actor = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Report_Customization_CustomizationFormModel);

/**
 * @inheritDoc
 */
Wl_Report_Customization_CustomizationFormModel.prototype.config=function()
{
  return {"a_field":{"a_customization_form":{"get":{"result":true},"post":{"post":true}},"cid_page":{"get":{"get":true},"post":{"get":true}},"cid_report":{"get":{"get":true},"post":{"get":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"k_report_save":{"get":{"get":true},"post":{"get":true}},"s_report":{"get":{"get":true}},"uid_actor":{"get":{"get":true},"post":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Report_Customization_CustomizationFormModel.instanceGet
 * @param {number} cid_page Report page CID.
 * @param {number} cid_report Report CID.
 * @param {string} k_business Business primary key.
 * @param {?string} k_report_save Primary key of a saved report. `null` means that report is not saved.
 * @param {string} s_report Report CID list to that page customization form must be converted. String separated with `,`. May be specified only if {@link Wl_Report_Customization_CustomizationFormModel.cid_page} in not empty.
 * @param {string} uid_actor Current user's primary key.
 * @returns {Wl_Report_Customization_CustomizationFormModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Loads customization data of the customization form that corresponds to specified report / report page.
 *
 * Populates {@link Wl_Report_Customization_CustomizationFormModel.a_customization_form} with the customization data of the requested
 * report or report page, optionally converted to the reports listed in {@link Wl_Report_Customization_CustomizationFormModel.s_report}.
 *
 * @function
 * @name Wl_Report_Customization_CustomizationFormModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Saves given data of a customization form into database.
 *
 * Stores the customization data supplied in {@link Wl_Report_Customization_CustomizationFormModel.a_customization_form} for the
 * requested report or report page and resets the related report configuration cache.
 *
 * @function
 * @name Wl_Report_Customization_CustomizationFormModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
