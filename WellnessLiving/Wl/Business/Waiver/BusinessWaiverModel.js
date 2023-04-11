/**
 * Retrieves information about Business Waiver settings.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @see Wl\Business\Waiver\BusinessWaiverApi
 */
function Wl_Business_Waiver_BusinessWaiverModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * If {@link \Wl\Business\Waiver\BusinessWaiverApi::$is_contract_minor} is set, this field contains the age
   * of the minor. Default value is 18.
   *
   * @get result
   * @type {number}
   */
  this.i_contract_minor = 18;

  /**
   * Require clients to agree to the Liability Release only when booking services. `True` means to require. `False` otherwise.
   *
   * @get get
   * @type {boolean}
   */
  this.is_contract_book_only = false;

  /**
   * Clients can sign the waiver on behalf of any minor of age {@link \Wl\Business\Waiver\BusinessWaiverApi::$i_contract_minor}
   *
   * @get result
   * @type {boolean}
   */
  this.is_contract_minor = false;

  /**
   * Require clients to agree to the Liability Release upon registration. `True` means to require. `False` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_contract_upon_register = false;

  /**
   * Business Key. Primary key in table {@link \RsBusinessSql}.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Contents of the business waiver.
   *
   * @get get
   * @type {string}
   */
  this.xml_contract = "";

  /**
   * Description of the business waiver.
   *
   * @get get
   * @type {string}
   */
  this.xml_description = "";

  this.changeInit();
}

Core_Spa_Model.extend(Wl_Business_Waiver_BusinessWaiverModel);

/**
 * @inheritDoc
 */
Wl_Business_Waiver_BusinessWaiverModel.prototype.config=function()
{
  return {
    "a_field": {
      "i_contract_minor": {
        "get": {
          "result": true
        }
      },
      "is_contract_book_only": {
        "get": {
          "get": true
        }
      },
      "is_contract_minor": {
        "get": {
          "result": true
        }
      },
      "is_contract_upon_register": {
        "get": {
          "result": true
        }
      },
      "k_business": {
        "get": {
          "get": true
        }
      },
      "xml_contract": {
        "get": {
          "get": true
        }
      },
      "xml_description": {
        "get": {
          "get": true
        }
      }
    }
  };
};

/**
 * @function
 * @name Wl_Business_Waiver_BusinessWaiverModel.instanceGet
 * @param {string} k_business Business Key. Primary key in table {@link \RsBusinessSql}.
 * @returns {Wl_Business_Waiver_BusinessWaiverModel}
 * @see Core_Spa_Model.instanceGet()
 */