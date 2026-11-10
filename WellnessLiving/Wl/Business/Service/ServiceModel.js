/**
 * Returns which services are available for the business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Service_ServiceModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * Business service availability.
   *
   * Array where keys are service IDs 
   *     and values are `true` if the service is available for the business and `false` otherwise.
   *
   * @get result
   * @type {{}}
   */
  this.a_services_enabled = undefined;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Service_ServiceModel);

/**
 * @inheritDoc
 */
Wl_Business_Service_ServiceModel.prototype.config=function()
{
  return {"a_field":{"a_services_enabled":{"get":{"result":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Business_Service_ServiceModel.instanceGet
 * @param {string} k_business Business key.
 * @returns {Wl_Business_Service_ServiceModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns which services are available for the business.
 *
 * The gym visits (drop-ins) are reported as available when the business allows them.
 * The current user must be a staff member with access to the business.
 *
 * @function
 * @name Wl_Business_Service_ServiceModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
