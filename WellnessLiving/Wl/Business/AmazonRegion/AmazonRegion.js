/**
 * Allows retrieval of region ID from a business key.
 *
 * Entire database is stored as a single file in the Edge Cache.
 * Thus, entire database is downloaded with a single API request.
 * And then information about all businesses are retrieved without additional API requests.
 */
class Wl_Business_AmazonRegionLazy
{
  /**
   * Alphabet to encode binary data.
   */
  static ALPHABET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+-";

  /**
   * Number of business keys included in a single row.
   */
  static BLOCK_ROW=1024;

  /**
   * Alphabet used for decoding of the data.
   *
   * A flipped copy of {@link Wl_Business_AmazonRegionLazy.ALPHABET}.
   * Key is a character, value is an index of the character in the alphabet.
   *
   * `null` is this property is not initialized yet.
   * It gets initialized on the first call to {@link Wl_Business_AmazonRegionLazy.edgeDecode()}.
   *
   * @private
   * @type {Object.<string,number>|null}
   */
  static a_alphabet=null;

  /**
   * Converts key of the business into the region ID in which that business resides.
   *
   * Please, be advised that this method does not check if the business exists or not.
   * For non-existing businesses, this method will return a random data center.
   *
   * This method is effective from the point of view of number of API requests.
   * It makes a single API request that loads information about all businesses in the World.
   * All subsequent requests are performed without additional API requests.
   *
   * @param {string} k_business Key of the business to convert.
   * @return {WlSdk_Deferred_Promise} Promise which is resolved when information about the business region is ready.
   *   ID of the region is passed as an argument to the callback of the `done()` method.
   */
  static businessRegionAsync(k_business)
  {
    // The Wl_Business_AmazonRegion.edgeDecode() uses key of the business as an integer.
    // Invalid values will cause JS errors.
    WlSdk_AssertException.assertTrue(typeof parseInt(k_business) === 'number', {
      'k_business': k_business,
      'text_message': 'Key of the business is invalid.'
    });

    const o_edge=Wl_Business_AmazonRegion_BusinessRegionEdge.instanceGet('0');
    const o_deferred=new WlSdk_Deferred();

    const o_deferred_sync=o_edge.getIf();
    o_deferred_sync.done(function()
    {
      o_deferred.resolve(Wl_Business_AmazonRegionLazy.edgeDecode(o_edge,k_business));
    });
    o_deferred_sync.fail(function()
    {
      o_deferred.reject();
    });

    return o_deferred.promise();
  }

  /**
   * Converts key of the business into the region ID in which that business resides.
   *
   * Please, be advised that this method does not check if the business exists or not.
   * For non-existing businesses, this method will return a random data center.
   *
   * This method is effective from the point of view of number of API requests.
   * It makes a single API request that loads information about all businesses in the World.
   * All subsequent requests are performed without additional API requests.
   *
   * Please, note that this method only works when the data is preliminarily preloaded.
   * Use {@link Wl_Business_AmazonRegionLazy.preload()} to preload the data.
   *
   * @param {string} k_business Key of the business to convert.
   * @return {Number} ID of the region in which this business resides.
   */
  static businessRegionSync(k_business)
  {
    // The Wl_Business_AmazonRegion.edgeDecode() uses key of the business as an integer.
    // Invalid values will cause JS errors.
    WlSdk_AssertException.assertTrue(typeof parseInt(k_business) === 'number', {
      'k_business': k_business,
      'text_message': 'Key of the business is invalid.'
    });

    const o_edge=Wl_Business_AmazonRegion_BusinessRegionEdge.instanceGet('0');

    // Otherwise the following code will produce undefined (random) data.
    WlSdk_AssertException.assertTrue(o_edge.id_region!==undefined, {
      'text_message': 'It is not allowed to call Wl_Business_AmazonRegionLazy.businessRegionSync() when the data is not preloaded. Use Wl_Business_AmazonRegionLazy.preload() to preload the data.'
    })

    return Wl_Business_AmazonRegionLazy.edgeDecode(o_edge,k_business);
  }

  /**
   * Decodes edge data and retrieves ID of the region for specified business.
   *
   * @private
   * @param {Wl_Business_AmazonRegion_BusinessRegionEdge} o_edge The Edge Cache object with information about data centers.
   * @param {string} k_business Key of the business to convert to region ID.
   * @return {Number} ID of the region in which this business resides.
   */
  static edgeDecode(o_edge,k_business)
  {
    const i_block=parseInt(bcdiv(k_business,Wl_Business_AmazonRegionLazy.BLOCK_ROW,0));

    if(!o_edge.a_block.hasOwnProperty(i_block))
      return o_edge.id_region;

    if(Wl_Business_AmazonRegionLazy.a_alphabet===null)
    {
      let a_alphabet= {};
      for(let i_char=0;i_char<Wl_Business_AmazonRegionLazy.ALPHABET.length;i_char++)
        a_alphabet[Wl_Business_AmazonRegionLazy.ALPHABET[i_char]]=i_char;

      Wl_Business_AmazonRegionLazy.a_alphabet=a_alphabet;
    }

    const s_block=o_edge.a_block[i_block];
    let i_position=0;

    const i_offset=k_business%Wl_Business_AmazonRegionLazy.BLOCK_ROW;

    let i_value=0;
    let i_volume=1;
    for(let i_region in o_edge.a_region)
    {
      if(!o_edge.a_region.hasOwnProperty(i_region))
        continue;

      while(i_volume<2&&i_position<s_block.length)
      {
        let i_char=Wl_Business_AmazonRegionLazy.a_alphabet[s_block[i_position]];
        i_value+=i_char*i_volume;
        i_volume*=64;
        i_position++;
      }

      if(i_volume<=1)
        break;

      const i_bit=i_value%2;
      i_value=parseInt(bcdiv(i_value,2,0));
      i_volume=parseInt(bcdiv(i_volume,2,0));

      if(!i_bit)
        continue;

      let i_offset_done=-1;
      let is_include=true;
      let is_skip=false;
      let is_first=true;
      while(i_offset_done<Wl_Business_AmazonRegionLazy.BLOCK_ROW-1)
      {
        while(i_volume<4096&&i_position<s_block.length)
        {
          let i_char=Wl_Business_AmazonRegionLazy.a_alphabet[s_block[i_position]];
          i_value+=i_char*i_volume;
          i_volume*=64;
          i_position++;
        }

        // Otherwise the following code will produce undefined (random) data.
        WlSdk_AssertException.assertTrue(i_volume>=4,{
          'a_block': o_edge.a_block,
          'a_region': o_edge.a_region,
          'i_offset_done': i_offset_done,
          'i_value': i_value,
          'i_volume': i_volume,
          'id_region': o_edge.id_region,
          'k_business': k_business,
          's_block': s_block,
          'text_message': 'Invalid block data. Can not read class.'
        });

        is_include=!is_include;

        const i_class=i_value%4;
        i_value=parseInt(bcdiv(i_value,4,0));
        i_volume=parseInt(bcdiv(i_volume,4,0));

        let i_class_offset;
        let i_class_volume;

        if(!i_class)
        {
          i_class_offset=0;
          i_class_volume=1;
        }
        else if(i_class===1)
        {
          i_class_offset=1;
          i_class_volume=2;
        }
        else if(i_class===2)
        {
          i_class_offset=3;
          i_class_volume=32;
        }
        else
        {
          i_class_offset=35;
          i_class_volume=1024;
        }

        // Otherwise the following code will produce undefined (random) data.
        WlSdk_AssertException.assertTrue(i_volume>=i_class_volume,{
          'a_region': o_edge.a_region,
          'i_class_volume': i_class_volume,
          'i_offset_done': i_offset_done,
          'i_value': i_value,
          'i_volume': i_volume,
          'id_region': o_edge.id_region,
          'k_business': k_business,
          's_block': s_block,
          'text_message': 'Invalid block data. Can not read class.'
        });

        const i_length=i_value%i_class_volume;
        i_value=parseInt(bcdiv(i_value,i_class_volume,0));
        i_volume=parseInt(bcdiv(i_volume,i_class_volume,0));

        i_offset_done+=i_class_offset+i_length+(is_first?0:1);
        is_first=false;

        if(i_offset_done>=i_offset&&!is_skip)
        {
          if(is_include)
            return o_edge.a_region[i_region];
          is_skip=true;
        }
      }

      // Otherwise the following code will produce undefined (random) data.
      WlSdk_AssertException.assertTrue(i_offset_done===1023,{
        'a_region': o_edge.a_region,
        'i_offset_done': i_offset_done,
        'i_value': i_value,
        'i_volume': i_volume,
        'id_region': o_edge.id_region,
        'k_business': k_business,
        'o_edge': o_edge,
        's_block': s_block,
        'text_message': 'Invalid block data. Total offset does not equal size of the block.'
      });
    }

    return o_edge.id_region;
  }

  /**
   * Preloads all the information required for retrieval of information about data centers of businesses.
   *
   * @return {WlSdk_Deferred_Promise} Promise which is resolved when information about the business regions is loaded.
   */
  static preload()
  {
    const o_edge=Wl_Business_AmazonRegion_BusinessRegionEdge.instanceGet('0');
    return o_edge.getIf();
  }
}