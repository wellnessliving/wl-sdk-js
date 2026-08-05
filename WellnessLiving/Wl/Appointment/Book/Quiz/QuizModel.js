/**
 * Gets a list of required quizzes.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Quiz_QuizModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_service,k_resource,uid,id_purchase_item,k_id,is_all,json_shop_product_option";

  /**
   * @typedef {{}} Wl_Appointment_Book_Quiz_QuizModel_a_quiz
   * @property {boolean} is_require Whether the quiz is required.
   * @property {string} k_quiz Quiz key.
   * @property {string} text_title Quiz title.
   */

  /**
   * List of required quizzes.
   *
   * @get result
   * @type {Wl_Appointment_Book_Quiz_QuizModel_a_quiz[]}
   */
  this.a_quiz = undefined;

  /**
   * Purchase item ID.
   *
   * @get get
   * @see RsPurchaseItemSid
   * @type {?number}
   */
  this.id_purchase_item = null;

  /**
   * `true` to return both optional and required forms; `false` to return only required forms.
   *
   * @get get
   * @type {boolean}
   */
  this.is_all = false;

  /**
   * List of add-ons keys.
   *
   * @get get
   * @type {string}
   */
  this.json_shop_product_option = "[]";

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Promotion key or appointment key. Depends on {@link Wl_Appointment_Book_Quiz_QuizModel.id_purchase_item}.
   *
   * @get get
   * @type {?string}
   */
  this.k_id = null;

  /**
   * Resource key.
   *
   * @get get
   * @type {?string}
   */
  this.k_resource = null;

  /**
   * Service key.
   *
   * @get get
   * @type {?string}
   */
  this.k_service = null;

  /**
   * User key.
   * Empty if guest.
   *
   * @get get
   * @type {?string}
   */
  this.uid = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Quiz_QuizModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Quiz_QuizModel.prototype.config=function()
{
  return {"a_field":{"a_quiz":{"get":{"result":true}},"id_purchase_item":{"get":{"get":true}},"is_all":{"get":{"get":true}},"json_shop_product_option":{"get":{"get":true}},"k_business":{"get":{"get":true}},"k_id":{"get":{"get":true}},"k_resource":{"get":{"get":true}},"k_service":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Quiz_QuizModel.instanceGet
 * @param {string} k_business Business key.
 * @param {?string} k_service Service key.
 * @param {?string} k_resource Resource key.
 * @param {?string} uid User key. Empty if guest.
 * @param {?number} id_purchase_item Purchase item ID.
 * @param {?string} k_id Promotion key or appointment key. Depends on {@link Wl_Appointment_Book_Quiz_QuizModel.id_purchase_item}.
 * @param {boolean} is_all `true` to return both optional and required forms; `false` to return only required forms.
 * @param {string} json_shop_product_option List of add-ons keys.
 * @returns {Wl_Appointment_Book_Quiz_QuizModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets a list of required quizzes.
 *
 * Gets a list of required quizzes which associated with requested service/resourse.
 *
 * @function
 * @name Wl_Appointment_Book_Quiz_QuizModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
