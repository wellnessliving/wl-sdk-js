/**
 * Quick search template settings API.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Search_Template_Quick_PanelModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = 'uid,k_business';

  /**
   * @inheritDoc
   */
  this.ERROR_SILENT = true;

  /**
   * Entity in array format.
   * For more information about the format, see {@link \Wl\Search\Entity\SearchEntityAbstract::createArray()} method.
   *
   * @post post
   * @type {{}}
   */
  this.a_criteria = [];

  /**
   * Search entity CID list.
   * Constants from {@link \Wl\Search\Entity\SearchEntityAbstract} subclasses.
   *
   * @post post
   * @type {number[]}
   */
  this.a_search_entity = [];

  /**
   * Business key.
   * Primary key in the {@link \RsBusinessSql} table.
   *
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * User key.
   * Primary key in the {@link \PassportLoginSql} table.
   *
   * @post get
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Search_Template_Quick_PanelModel);

/**
 * @inheritDoc
 */
Wl_Search_Template_Quick_PanelModel.prototype.config=function()
{
  return {
    "a_field": {
      "a_criteria": {
        "post": {
          "post": true
        }
      },
      "a_search_entity": {
        "post": {
          "post": true
        }
      },
      "k_business": {
        "post": {
          "get": true
        }
      },
      "uid": {
        "post": {
          "get": true
        }
      }
    }
  };
};

/**
 * @function
 * @name Wl_Search_Template_Quick_PanelModel.instanceGet
 * @param {string} uid User key. Primary key in the {@link \PassportLoginSql} table.
 * @param {string} k_business Business key. Primary key in the {@link \RsBusinessSql} table.
 * @returns {Wl_Search_Template_Quick_PanelModel}
 * @see WlSdk_ModelAbstract.instanceGet()
*/