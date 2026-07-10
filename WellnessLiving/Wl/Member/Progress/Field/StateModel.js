/**
 * Changes states of field.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Member_Progress_Field_StateModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Field ID. One of the {@link Wl_Member_Progress_Field_ProgressFieldSid} constant.
   *
   * @put result
   * @see Wl_Member_Progress_Field_ProgressFieldSid
   * @type {number}
   */
  this.id_field = undefined;

  /**
   * Whether field is active and should be displayed on page.
   *
   * @put post,result
   * @type {?boolean}
   */
  this.is_active = null;

  /**
   * Whether this field is public. If this field is set to `false`, this field is not visible to clients.
   *
   * @put post,result
   * @type {?boolean}
   */
  this.is_public = null;

  /**
   * Whether field value is required for clients.
   *
   * @put post,result
   * @type {?boolean}
   */
  this.is_require = null;

  /**
   * Whether field value is required for staffs.
   *
   * @put post,result
   * @type {?boolean}
   */
  this.is_require_staff = null;

  /**
   * Business key.
   *
   * @put get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Field key.
   *
   * @put get
   * @type {string}
   */
  this.k_field = "";

  /**
   * Field title.
   *
   * @put result
   * @type {?string}
   */
  this.text_title = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Member_Progress_Field_StateModel);

/**
 * @inheritDoc
 */
Wl_Member_Progress_Field_StateModel.prototype.config=function()
{
  return {"a_field":{"id_field":{"put":{"result":true}},"is_active":{"put":{"post":true,"result":true}},"is_public":{"put":{"post":true,"result":true}},"is_require":{"put":{"post":true,"result":true}},"is_require_staff":{"put":{"post":true,"result":true}},"k_business":{"put":{"get":true}},"k_field":{"put":{"get":true}},"text_title":{"put":{"result":true}}}};
};

/**
 * Changes states of field.
 *
 * Updates one or more state flags (`is_active`, `is_public`, `is_require`, `is_require_staff`) for the specified
 * progress field and returns the new values. At least one flag must be provided; the field must be active to
 * change its required state.
 *
 * @function
 * @name Wl_Member_Progress_Field_StateModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
