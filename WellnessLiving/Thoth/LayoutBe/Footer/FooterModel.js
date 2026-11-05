/**
 * Loads the data required to render the site footer for the given business.
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
   * Whether the business has a white-label plan of the Achieve client app.
   *
   * `true` if it has: the footer shows the links to the app in the stores, {@link Thoth_LayoutBe_Footer_FooterModel.url_apple_store} and
   * {@link Thoth_LayoutBe_Footer_FooterModel.url_google_play}; `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_white_label_achieve = undefined;

  /**
   * Business key to get footer data for.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Whether the "Powered by WellnessLiving" branding and Terms & Conditions links are shown in the footer.
   *
   * `true` to show them; `false` for white-label businesses, which must not display WellnessLiving branding.
   *
   * @get result
   * @type {boolean}
   */
  this.show_term = undefined;

  /**
   * URL of the Achieve client app of the business in the Apple App Store, for example
   * `https://apps.apple.com/app/id1234567890`.
   *
   * An empty string if the business has no white-label plan of the Achieve client app
   * ({@link Thoth_LayoutBe_Footer_FooterModel.is_white_label_achieve}), or the URL is not set.
   *
   * @get result
   * @type {string}
   */
  this.url_apple_store = undefined;

  /**
   * URL of the Achieve client app of the business in Google Play, for example
   * `https://play.google.com/store/apps/details?id=com.example.app`.
   *
   * An empty string if the business has no white-label plan of the Achieve client app
   * ({@link Thoth_LayoutBe_Footer_FooterModel.is_white_label_achieve}), or the URL is not set.
   *
   * @get result
   * @type {string}
   */
  this.url_google_play = undefined;

  /**
   * URL of the tour page of the business type on the site of `WellnessLiving`.
   *
   * The "Powered by" badge of the footer links to this page, for example `https://example.com/crossfit/software/`.
   * A business whose type has no tour page of its own gets the URL of the default tour page.
   *
   * @get result
   * @type {string}
   */
  this.url_tour = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Thoth_LayoutBe_Footer_FooterModel);

/**
 * @inheritDoc
 */
Thoth_LayoutBe_Footer_FooterModel.prototype.config=function()
{
  return {"a_field":{"is_white_label_achieve":{"get":{"result":true}},"k_business":{"get":{"get":true}},"show_term":{"get":{"result":true}},"url_apple_store":{"get":{"result":true}},"url_google_play":{"get":{"result":true}},"url_tour":{"get":{"result":true}}}};
};

/**
 * @function
 * @name Thoth_LayoutBe_Footer_FooterModel.instanceGet
 * @param {string} k_business Business key to get footer data for.
 * @returns {Thoth_LayoutBe_Footer_FooterModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Loads the data required to render the site footer for the given business.
 *
 * Loads the business's white-label status and derives whether the "Powered by WellnessLiving"
 * branding and the Terms and Conditions link should be shown in the footer. The result is stored in
 * {@link Thoth_LayoutBe_Footer_FooterModel.show_term}. The URL of the tour page of the business type, which the badge links to, is
 * loaded into {@link Thoth_LayoutBe_Footer_FooterModel.url_tour}. For a business with a white-label plan of the Achieve client app the
 * links to the app in the stores are loaded too.
 *
 * @function
 * @name Thoth_LayoutBe_Footer_FooterModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
