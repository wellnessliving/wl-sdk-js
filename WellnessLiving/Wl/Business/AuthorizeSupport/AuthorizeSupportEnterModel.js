/**
 * Logs current user into business backend.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_AuthorizeSupport_AuthorizeSupportEnterModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The location key.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_AuthorizeSupport_AuthorizeSupportEnterModel);

/**
 * @inheritDoc
 */
Wl_Business_AuthorizeSupport_AuthorizeSupportEnterModel.prototype.config=function()
{
  return {"a_field":{"k_location":{"get":{"get":true}}}};
};

/**
 * Logs current user into business backend.
 *
 * Refreshes the access cache for the current user and, once the location's business is
 * resolved, signs the user into that business backend as an authorized support session.
 *
 * @function
 * @name Wl_Business_AuthorizeSupport_AuthorizeSupportEnterModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
