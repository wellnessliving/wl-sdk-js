/**
 * Deletes the specified video tag.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Video_Tag_TagModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * If `true`, confirmation is required to delete videos. Otherwise, this will be `false`.
   *
   * @delete get
   * @type {boolean}
   */
  this.is_delete_confirm = false;

  /**
   * The business key.
   *
   * @delete get
   * @post get
   * @put get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The video tag key.
   *
   * @delete get
   * @post get,result
   * @put get
   * @type {string}
   */
  this.k_video_tag = "";

  /**
   * The video tag title.
   *
   * @post post
   * @put post
   * @type {string}
   */
  this.text_title = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Video_Tag_TagModel);

/**
 * @inheritDoc
 */
Wl_Video_Tag_TagModel.prototype.config=function()
{
  return {"a_field":{"is_delete_confirm":{"delete":{"get":true}},"k_business":{"delete":{"get":true},"post":{"get":true},"put":{"get":true}},"k_video_tag":{"delete":{"get":true},"post":{"get":true,"result":true},"put":{"get":true}},"text_title":{"post":{"post":true},"put":{"post":true}}}};
};

/**
 * Deletes the specified video tag.
 *
 * Permanently removes the video tag from the business library. If any videos are currently
 * assigned to this tag, a confirmation flag must be set; otherwise the API throws a
 * confirmation-required error so the caller can prompt the user before proceeding.
 *
 * @function
 * @name Wl_Video_Tag_TagModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */

/**
 * Creates a new video tag.
 *
 * Adds a new content tag to the business video library for use when categorizing videos.
 * Requires backend access and an active video subscription with at least the basic plan.
 *
 * @function
 * @name Wl_Video_Tag_TagModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */

/**
 * Updates the specified video tag.
 *
 * Renames an existing content tag in the business video library. Requires backend access
 * and an active video subscription with at least the basic plan.
 *
 * @function
 * @name Wl_Video_Tag_TagModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
