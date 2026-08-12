/**
 * Returns the data required to render the site footer for the given business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Thoth_LayoutBe_Footer_FooterModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * Business key to get footer data for.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * `true` to show the "Powered by WellnessLiving" branding and Terms & Conditions links in the footer;
   * `false` for white-label businesses, which must not display WellnessLiving branding.
   *
   * @get result
   * @type {boolean}
   */
  this.show_term = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Thoth_LayoutBe_Footer_FooterModel);

/**
 * @inheritDoc
 */
Thoth_LayoutBe_Footer_FooterModel.prototype.config=function()
{
  return {"a_field":{"k_business":{"get":{"get":true}},"show_term":{"get":{"result":true}}}};
};

/**
 * @function
 * @name Thoth_LayoutBe_Footer_FooterModel.instanceGet
 * @param {string} k_business Business key to get footer data for.
 * @returns {Thoth_LayoutBe_Footer_FooterModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns the data required to render the site footer for the given business.
 *
 * @function
 * @name Thoth_LayoutBe_Footer_FooterModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
