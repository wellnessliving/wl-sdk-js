/**
 * Releases a Zoom license used by a business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Zoom_ZoomUserReleaseModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Business key which currently use zoom user.
   *
   * @put get
   * @type {string}
   */
  this.k_business_use = "";

  /**
   * Zoom user ID.
   *
   * @put post
   * @type {string}
   */
  this.s_user_id = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Zoom_ZoomUserReleaseModel);

/**
 * @inheritDoc
 */
Wl_Zoom_ZoomUserReleaseModel.prototype.config=function()
{
  return {"a_field":{"k_business_use":{"put":{"get":true}},"s_user_id":{"put":{"post":true}}}};
};

/**
 * Releases a Zoom license used by a business.
 *
 * Makes the Zoom license free for other meetings and ends the meeting that runs on this license, if there is one.
 * A license that belongs to the business can be released only by a staff member of this business.
 * A system license can be released by a staff member of the business that uses it or by a system administrator.
 *
 * @function
 * @name Wl_Zoom_ZoomUserReleaseModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
