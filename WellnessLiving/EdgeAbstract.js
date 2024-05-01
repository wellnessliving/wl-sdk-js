/**
 * Base class for all Edge Cache models.
 *
 * @constructor
 */
class WlSdk_EdgeAbstract extends WlSdk_ModelAbstract
{
  /**
   * CID of this Edge Cache model.
   *
   * @type {null|number}
   */
  CID=null;

  /**
   * @inheritDoc
   */
  SIGNATURE = false;

  /**
   * @inheritDoc
   */
  apiUrl()
  {
    return WlSdk_Config_Mixin.urlEdge()+this.resource();
  }

  /**
   * @inheritDoc
   */
  requestGetVariables(s_method)
  {
    return {};
  }

  /**
   * @inheritDoc
   */
  resource()
  {
    let a_key = [];
    const a_field = this.config()['a_field'];

    for(const s_field in a_field)
    {
      if(!a_field.hasOwnProperty(s_field))
        continue;
      if(!a_field[s_field]['get']||!a_field[s_field]['get']['get'])
        continue;

      a_key.push(this[s_field]);
    }

    ksort(a_key);

    return this.CID+'/'+a_key.join('/')+'.json';
  }
}
