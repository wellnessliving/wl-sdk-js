/**
 * Restricts access to API for all sites, which are given in the list.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Request_Api_Application_OriginModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * A list of origins.
   *
   * An associative array where the key is the origin URL of the site where API calls can be made,
   *  and the value is the additional API domain used to make API requests to the WellnessLiving server.
   * `null` if not yet initialized.
   *
   * @delete post
   * @get result
   * @put post
   * @type {?string[]}
   */
  this.a_list = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Request_Api_Application_OriginModel);

/**
 * @inheritDoc
 */
Core_Request_Api_Application_OriginModel.prototype.config=function()
{
  return {"a_field":{"a_list":{"delete":{"post":true},"get":{"result":true},"put":{"post":true}}}};
};

/**
 * Restricts access to API for all sites, which are given in the list.
 *
 * Accepts a list of origin URLs (with optional API domain overrides), validates each URL, and removes
 * the matching entries from the allowed origins for the current application, then clears the origin cache.
 *
 * @function
 * @name Core_Request_Api_Application_OriginModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */

/**
 * Gets list of all sites, where usage of the API is allowed for the current application.
 *
 * Returns the list of allowed CORS origins for the current API application, where each key is an
 * origin URL and each value is an optional API domain used to proxy requests from that origin.
 *
 * @function
 * @name Core_Request_Api_Application_OriginModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Allows access to API for all sites, which are given in the list.
 *
 * Accepts a list of origin URLs (with optional API domain overrides), validates each URL and domain,
 * inserts or updates the entries in the allowed origins for the current application, then clears the origin cache.
 *
 * @function
 * @name Core_Request_Api_Application_OriginModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
