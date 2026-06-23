/**
 * Returns the lists of completed and pending quiz responses for the specified user and business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Form_Response_ResponseListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business";

  /**
   * @typedef {{}} Wl_Profile_Form_Response_ResponseListModel_a_quiz_login
   * @property {string[]} a_visit List of visit keys associated with uncompleted response.    Key is visit key.     Value is date of visit.
   * @property {string} dtl_date The date of the request to fill out a quiz form.
   * @property {number} id_source List of sources where quiz response can be generated.
   * @property {boolean} is_private Determines whether the form can be viewed by staff member only after confirmation.    `true` - the form can be viewed only after confirmation.    `false` - the form can always be viewed.
   * @property {string} k_quiz The quiz key.
   * @property {string} k_quiz_login The key of the request.
   * @property {?string} k_quiz_response Key of the response.     Not `null` in case when response in draft status.
   * @property {string} text_title The quiz title.
   */

  /**
   * The list of uncompleted quiz responses. Each element has the next structure:
   *
   * @get result
   * @type {Wl_Profile_Form_Response_ResponseListModel_a_quiz_login[]}
   */
  this.a_quiz_login = undefined;

  /**
   * @typedef {{}} Wl_Profile_Form_Response_ResponseListModel_a_quiz_response
   * @property {string[]} a_visit List of visit keys associated with uncompleted response.    Key is visit key.     Value is date of visit.
   * @property {string} dtl_date The date of the request to fill out a quiz form.
   * @property {number} id_source List of sources where quiz response can be generated.
   * @property {number} id_status List of response statuses.
   * @property {boolean} is_private Determines whether the form can be viewed by staff member only after confirmation.    `true` - the form can be viewed only after confirmation.    `false` - the form can always be viewed.
   * @property {string} k_quiz The quiz key.
   * @property {string} k_quiz_login The quiz response key.
   * @property {?string} text_amend_date Date when response amended.    `null` if response was not edited.
   * @property {?string} text_amend_user Name of the user who amend the response.    `null` if response was not edited.
   * @property {string} text_title The quiz title.
   * @property {string} text_user Name of user who complete response or start a draft.
   */

  /**
   * The list of completed quiz responses. Each element has the next structure:
   *
   * @get result
   * @type {Wl_Profile_Form_Response_ResponseListModel_a_quiz_response[]}
   */
  this.a_quiz_response = undefined;

  /**
   * Whether response can be amended by current user.
   *
   * @get result
   * @type {boolean}
   */
  this.can_amend = undefined;

  /**
   * Whether response can be filled by current user.
   *
   * @get result
   * @type {boolean}
   */
  this.can_fill = undefined;

  /**
   * Whether response can be removed by current user.
   *
   * @get result
   * @type {boolean}
   */
  this.can_remove = undefined;

  /**
   * Whether response can be viewed by current user.
   *
   * @get result
   * @type {boolean}
   */
  this.can_view = undefined;

  /**
   * Defines whether completed forms should not be included in result list of forms.
   *
   * `true` to exclude completed forms from result.
   * `false` to include completed forms to result.
   *
   * @get get
   * @type {boolean}
   */
  this.hide_completed = false;

  /**
   * Defines whether optional uncompleted forms should not be included in result list of forms.
   *
   * `true` to exclude optional uncompleted forms from result.
   * `false` to include optional uncompleted forms to result.
   *
   * @get get
   * @type {boolean}
   */
  this.hide_optional = false;

  /**
   * This will be `true` if the API is being used from the backend. Otherwise, this will be `false`.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * The key of the business to show information for.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The key of the user to show information for.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Form_Response_ResponseListModel);

/**
 * @inheritDoc
 */
Wl_Profile_Form_Response_ResponseListModel.prototype.config=function()
{
  return {"a_field":{"a_quiz_login":{"get":{"result":true}},"a_quiz_response":{"get":{"result":true}},"can_amend":{"get":{"result":true}},"can_fill":{"get":{"result":true}},"can_remove":{"get":{"result":true}},"can_view":{"get":{"result":true}},"hide_completed":{"get":{"get":true}},"hide_optional":{"get":{"get":true}},"is_backend":{"get":{"get":true}},"k_business":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Profile_Form_Response_ResponseListModel.instanceGet
 * @param {string} uid The key of the user to show information for.
 * @param {string} k_business The key of the business to show information for.
 * @returns {Wl_Profile_Form_Response_ResponseListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns the lists of completed and pending quiz responses for the specified user and business.
 *
 * Returns the client's completed, draft, and pending form responses for the business, sorted
 * newest first. Also provides permission flags that control which actions the current user may
 * perform on each response.
 *
 * @function
 * @name Wl_Profile_Form_Response_ResponseListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
