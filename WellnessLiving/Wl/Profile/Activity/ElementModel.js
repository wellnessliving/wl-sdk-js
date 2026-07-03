/**
 * Retrieves information about activity item.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Activity_ElementModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_login_activity";

  /**
   * Messages with description what did user do to get account credits as reward points.
   *
   * @get result
   * @type {string[]}
   */
  this.a_credit_score = undefined;

  /**
   * Messages with description what did user do to get points.
   *
   * @get result
   * @type {string[]}
   */
  this.a_reward_score = undefined;

  /**
   * Verifies that current user can view the specified profile.
   *
   * @get result
   * @type {boolean}
   */
  this.can_profile = undefined;

  /**
   * The date of the activity in GMT.
   *
   * @get result
   * @type {string}
   */
  this.dt_date_gmt = undefined;

  /**
   * The date of the activity in the client's time zone.
   *
   * @get result
   * @type {string}
   */
  this.dt_date_local = undefined;

  /**
   * Description of the action, who and what did.
   *
   * @get result
   * @type {string}
   */
  this.html_message = undefined;

  /**
   * Total amount of account credits user got for [ElementApi](/Wl/Profile/Activity/Element.json).
   *
   * @get result
   * @type {number}
   */
  this.i_credit_score = undefined;

  /**
   * The total amount of rewards points the client received for the activity.
   *
   * @get result
   * @type {number}
   */
  this.i_score = undefined;

  /**
   * The rewards points used to redeem a prize.
   *
   * @get result
   * @type {number}
   */
  this.i_spend = undefined;

  /**
   * List of available design icons.
   * Name of the class with this icon will be wl-icon-[sid]
   *
   * Last used ID 11.
   *
   * Values:
   * - 4 (`APPOINTMENT`): Signs that session or pass is an appointment connected.
   * - 7 (`ASSET`): Signs that session or pass is an asset connected.
   * - 5 (`CLASSES`): Signs that session or pass is a class or event connected.
   * - 3 (`CYCLE`): Cycle icon. Used, for example, to show transferred status of the promotion.
   * - 8 (`EARLY_CANCELED`): Early cancel activity list icon.
   * - 6 (`GYM_VISIT`): Signs that session or pass is a gym visit connected.
   * - 9 (`LATE_CANCELED`): Late cancel activity list icon.
   * - 2 (`NOTE`): Piece of paper with the curved end for different text notes.
   * - 10 (`NO_SHOW`): No show at visit activity list icon.
   * - 1 (`SOAP`): Paper with medical symbolic for medical notes.
   * - 11 (`SPA_CLOCK`): Clock activity list icon in SPA application.
   *
   * @get result
   * @type {?number}
   */
  this.id_icon = null;

  /**
   * Manages identifiers of user activity.
   *
   * Last ID: 56.
   *
   * Values:
   * - 27 (`APPOINTMENT_BOOK`): Client books an appointment.
   * - 47 (`APPOINTMENT_BOOK_FACEBOOK`): Client booked an appointment and shared on Facebook.
   * - 48 (`APPOINTMENT_BOOK_TWITTER`): Client booked an appointment and shared on Twitter.
   * - 28 (`APPOINTMENT_CANCEL`): Client cancels an appointment.
   * - 23 (`APPOINTMENT_VISIT`): Client attends an appointment.
   * - 52 (`APPOINTMENT_WAIT`): Client books an appointment to wait list.
   * - 49 (`ASSET_BOOK_FACEBOOK`): Client booked an asset and shared on Facebook.
   * - 50 (`ASSET_BOOK_TWITTER`): Client booked an asset and shared on Twitter.
   * - 1 (`BIRTHDAY`): Client's birthday.
   * - 2 (`CLASS_BOOK`): Client booked a class.
   * - 43 (`CLASS_BOOK_FACEBOOK`): Client booked a class and shared on Facebook.
   * - 44 (`CLASS_BOOK_TWITTER`): Client booked a class and shared on Twitter.
   * - 3 (`CLASS_CANCEL`): Client cancelled a class.
   * - 15 (`CLASS_VISIT`): Client attends a class.
   * - 54 (`CLASS_WAIT`): Client booked a class.
   * - 51 (`COUPON_TRANSFER`): Gift card transferred.
   * - 31 (`CUSTOM_REWARD`): Staff approved a custom reward for a client.
   * - 17 (`ENROLLMENT_BOOK`): Client booked an enrollment.
   * - 45 (`ENROLLMENT_BOOK_FACEBOOK`): Client booked an enrollment and shared on Facebook.
   * - 46 (`ENROLLMENT_BOOK_TWITTER`): Client booked an enrollment and shared on Twitter.
   * - 18 (`ENROLLMENT_CANCEL`): Client cancels an enrollment.
   * - 16 (`ENROLLMENT_VISIT`): Client attends an enrollment.
   * - 53 (`ENROLLMENT_WAIT`): Client booked an enrollment.
   * - 12 (`FACEBOOK_CONNECT`): Client connected his Facebook account.
   * - 19 (`FACEBOOK_DISCONNECT`): Client disconnected his Facebook account.
   * - 4 (`FAVORITE_ADD_CLASS`): Client added a class to favorites.
   * - 5 (`FAVORITE_ADD_LOCATION`): Client added a location to favorites.
   * - 6 (`FAVORITE_ADD_STAFF`): Client added a staff member to favorites.
   * - 7 (`FAVORITE_REMOVE_CLASS`): Client removed a class from favorites.
   * - 8 (`FAVORITE_REMOVE_LOCATION`): Client removed a location from favorites.
   * - 9 (`FAVORITE_REMOVE_STAFF`): Client removed a staff member from favorites.
   * - 10 (`FRIEND_ADD`): Client added a friend.
   * - 32 (`GYM_VISIT`): Client made a gym visit.
   * - 14 (`INVITE_SEND`): Client sent an invite.
   * - 39 (`LOCATION_SHARE_FACEBOOK`): The user shared location item into Facebook
   * - 40 (`LOCATION_SHARE_TWITTER`): The user shared location item into Twitter
   * - 22 (`PAY`): The user spend money.
   * - 24 (`PRIZE`): Client has bought prize.
   * - 34 (`PROMOTION_TRANSFER`): Promotion transferred.
   * - 30 (`PURCHASE_PRODUCT`): Customer bought the product.
   * - 29 (`PURCHASE_PROMOTION`): Customer bought the promotion.
   * - 25 (`PURCHASE_SHARE_FACEBOOK`): The user shared purchase item into Facebook
   * - 26 (`PURCHASE_SHARE_TWITTER`): The user shared purchase item into Twitter
   * - 38 (`REFER_PURCHASE`): Referral made a purchase.
   * - 37 (`REFER_REGISTER`): A referrer is set for the user.
   * - 21 (`REGISTRATION`): The user has logged in.
   * - 11 (`REVIEW`): Client wrote a review.
   * - 41 (`REVIEW_SHARE_FACEBOOK`): The user shared purchase item into Facebook
   * - 42 (`REVIEW_SHARE_TWITTER`): The user shared purchase item into Twitter
   * - 55 (`REWARD_MANUAL`): Reward points were changed manually.
   * - 36 (`REWARD_RESET`): All-time earned reward points have been reset.
   * - 56 (`REWARD_RESET_AVAILABLE`): Current available reward points have been reset.
   * - 35 (`SUMMARY_VISIT`): Client attended several visits.
   * - 13 (`TWITTER_CONNECT`): Client connected his Twitter account.
   * - 20 (`TWITTER_DISCONNECT`): Client disconnected his Twitter account.
   *
   * @get result
   * @type {number}
   */
  this.id_type = undefined;

  /**
   * Object ID, for example, class period ID for books and visits.
   *
   * @get result
   * @type {string}
   */
  this.k_id = undefined;

  /**
   * The key of the activity item represented by this endpoint.
   *
   * @get get
   * @type {string}
   */
  this.k_login_activity = "";

  /**
   * The description of the activity. This should include the nature of the activity and the people involved.
   *
   * @get result
   * @type {string}
   */
  this.s_message = undefined;

  /**
   * Link to share activity with social networks.
   *
   * @get result
   * @type {string}
   */
  this.url_link = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Activity_ElementModel);

/**
 * @inheritDoc
 */
Wl_Profile_Activity_ElementModel.prototype.config=function()
{
  return {"a_field":{"a_credit_score":{"get":{"result":true}},"a_reward_score":{"get":{"result":true}},"can_profile":{"get":{"result":true}},"dt_date_gmt":{"get":{"result":true}},"dt_date_local":{"get":{"result":true}},"html_message":{"get":{"result":true}},"i_credit_score":{"get":{"result":true}},"i_score":{"get":{"result":true}},"i_spend":{"get":{"result":true}},"id_icon":{"get":{"result":true}},"id_type":{"get":{"result":true}},"k_id":{"get":{"result":true}},"k_login_activity":{"get":{"get":true}},"s_message":{"get":{"result":true}},"url_link":{"get":{"result":true}}}};
};

/**
 * @function
 * @name Wl_Profile_Activity_ElementModel.instanceGet
 * @param {string} k_login_activity The key of the activity item represented by this endpoint.
 * @returns {Wl_Profile_Activity_ElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves information about activity item.
 *
 * Loads a single activity record by `k_login_activity`, validates access via profile privileges,
 * and returns the activity message, icon, type, reward and credit scores, activity dates in UTC
 * and local time, spend amount, and a share URL.
 *
 * @function
 * @name Wl_Profile_Activity_ElementModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
