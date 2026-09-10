/**
 * Get all features with statuses enabled or disabled.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Page_Backend_Feature_FeatureModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of all features with statuses true/false. Key of id {@link Wl_Page_Backend_Feature_FeatureSid}
   *
   * @get result
   * @type {number[]}
   */
  this.a_features = undefined;

  /**
   * Key of the business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Page_Backend_Feature_FeatureModel);

/**
 * @inheritDoc
 */
Wl_Page_Backend_Feature_FeatureModel.prototype.config=function()
{
  return {"a_field":{"a_features":{"get":{"result":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * Get all features with statuses enabled or disabled.
 *
 * Validates the business key, then checks every known feature and reports whether it is enabled
 * for the business.
 *
 * @function
 * @name Wl_Page_Backend_Feature_FeatureModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
