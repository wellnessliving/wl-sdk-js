/**
 * Gets list of subscribed waivers.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Waiver_WaiverModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid";

  /**
   * @typedef {{}} Wl_Profile_Waiver_WaiverModel_a_waiver
   * @property {string} dt_agree_local Agreement date in business timezone.
   * @property {string} dt_agree_utc Agreement date in UTC.
   * @property {string} html_contract Contract text.
   * @property {string} ip_agree IP address from which agreement was done.
   * @property {string} url_signature URL to agreement signature.
   */

  /**
   * List of subscribed waivers. Every element has next keys:
   *
   * @get result
   * @type {Wl_Profile_Waiver_WaiverModel_a_waiver[]}
   */
  this.a_waiver = undefined;

  /**
   * Age of minor which documents can be signed by parent or legal guardian.
   *
   * @get result
   * @type {number}
   */
  this.i_minor_age = undefined;

  /**
   * Business to get information for.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * User to get information for.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Waiver_WaiverModel);

/**
 * @inheritDoc
 */
Wl_Profile_Waiver_WaiverModel.prototype.config=function()
{
  return {"a_field":{"a_waiver":{"get":{"result":true}},"i_minor_age":{"get":{"result":true}},"k_business":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Profile_Waiver_WaiverModel.instanceGet
 * @param {string} k_business Business to get information for.
 * @param {string} uid User to get information for.
 * @returns {Wl_Profile_Waiver_WaiverModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets list of subscribed waivers.
 *
 * Validates the business and the user, then checks that the current user has access to view
 * the profile. When the business belongs to a franchise that shares waivers across all
 * franchise locations, waivers are loaded from the franchisor business instead. Each waiver
 * includes the local and UTC agreement dates, the rendered contract text, the IP address used
 * to sign, and a link to the signature image, along with the minor age configured for parent
 * or guardian consent.
 *
 * @function
 * @name Wl_Profile_Waiver_WaiverModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
