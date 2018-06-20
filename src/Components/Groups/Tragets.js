import React, { Component } from 'react';
import "./Targets.css";
export default class Targets extends Component 
{  


    constructor(props)
    {
      super(props)


      this.HideTargets  = this.HideTargets.bind(this)
    }
    HideTargets()
    {
        this.props.Hide()
    }
    render()
    {
        return(


            <tr>
                            <td class="colspn-bg" colspan="7">
                                <div class="row buy-targets">
                                    <ul class="radio-wrapper inlined">
                                            <li>
                                                <input type="radio" name="rad" class="ipt-rad" id="rad_1" value="ETH" />
                                                <label for="rad_1" class="chk-ipt"><span class="box"></span>ETH</label>
                                            </li>
                                            <li>
                                                <input type="radio" name="rad" class="ipt-rad" id="rad_2" value="USDT" />
                                                <label for="rad_2" class="chk-ipt"><span class="box"></span>USDT</label>
                                            </li>
                                            <li>
                                                <input type="radio" name="rad" class="ipt-rad" id="rad_3" value="PCL" />
                                                <label for="rad_3" class="chk-ipt"><span class="box"></span>PCL</label>
                                            </li>
                                            <li>
                                                <input type="radio" name="rad" class="ipt-rad" id="rad_4" value="BITZ" />
                                                <label for="rad_4" class="chk-ipt"><span class="box"></span>BITZ</label>
                                            </li>
                                            <li>
                                                <input type="radio" name="rad" class="ipt-rad" id="rad_5" value="LEO" />
                                                <label for="rad_5" class="chk-ipt"><span class="box"></span>LEO</label>
                                            </li>
                                            <li>
                                                <input type="radio" name="rad" class="ipt-rad" id="rad_6" value="MOT" />
                                                <label for="rad_6" class="chk-ipt"><span class="box"></span>MOT</label>
                                            </li>
                                            <li>
                                                <input type="radio" name="rad" class="ipt-rad" id="rad_7" value="SKC" />
                                                <label for="rad_7" class="chk-ipt"><span class="box"></span>SKC</label>
                                            </li>
                                            <li>
                                                <input type="radio" name="rad" class="ipt-rad" id="rad_8" value="RADS" />
                                                <label for="rad_8" class="chk-ipt"><span class="box"></span>RADS</label>
                                            </li>
                                            <li>
                                                <input type="radio" name="rad" class="ipt-rad" id="rad_9" value="TAJ" />
                                                <label for="rad_9" class="chk-ipt"><span class="box"></span>TAJ</label>
                                            </li>
                                            <li>
                                            <a href="#" onClick={this.HideTargets} style={{float:"right"}} class="rm-tgt green"><span>&times;</span></a>
                                                </li>
                                </ul>
                                    <div class="target-wrapper">
                                        <div class="target-itm green">
                                            <h3 class="buy-ttl">BUY TARGETS:</h3>
                                            <ul>
                                                <li>
                                                    <div class="tgt-dual">
                                                        <span class="tgt-dual-itm"><span class="caret"></span>0.00000688<a href="#" class="rm-tgt"><span>&times;</span></a></span>
                                                        <span class="tgt-dual-itm"><span class="caret"></span>0.00000688<a href="#" class="rm-tgt"><span>&times;</span></a></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="tgt-dual">
                                                        <span class="tgt-dual-itm"><span class="caret"></span>0.00000758<a href="#" class="rm-tgt"><span>&times;</span></a></span>
                                                        <span class="tgt-dual-itm"><span class="caret"></span>0.00000758<a href="#" class="rm-tgt"><span>&times;</span></a></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="tgt-dual">
                                                        <span class="tgt-dual-itm"><span class="caret"></span>0.00000744<a href="#" class="rm-tgt"><span>&times;</span></a></span>
                                                        <span class="tgt-dual-itm"><span class="caret"></span>0.00000744<a href="#" class="rm-tgt"><span>&times;</span></a></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="tgt-dual">
                                                        <span class="tgt-dual-itm"><span class="caret"></span>0.00000758<a href="#" class="rm-tgt"><span>&times;</span></a></span>
                                                        <span class="tgt-dual-itm"><span class="caret"></span>0.00000758<a href="#" class="rm-tgt"><span>&times;</span></a></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="tgt-dual">
                                                        <span class="tgt-dual-itm"><span class="caret"></span>0.00000744<a href="#" class="rm-tgt"><span>&times;</span></a></span>
                                                        <span class="tgt-dual-itm"><span class="caret"></span>0.00000744<a href="#" class="rm-tgt"><span>&times;</span></a></span>
                                                    </div>
                                                </li>
                                            </ul>
                                            
                                        </div>
                                        <div class="target-itm red">
                                            <h3 class="buy-ttl">SELL TARGETS:</h3>
                                            <ul>
                                                <li>
                                                    <div class="tgt-dual">
                                                        <span class="tgt-dual-itm"><span class="caret"></span>0.00000688<span class="perc">(100%)</span><a href="#" class="rm-tgt"><span>&times;</span></a></span>
                                                        <span class="tgt-dual-itm"><span class="caret"></span>0.00000688<span class="perc">(100%)</span><a href="#" class="rm-tgt"><span>&times;</span></a></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="tgt-dual">
                                                        <span class="tgt-dual-itm"><span class="caret"></span>0.00000758<span class="perc">(0.0%)</span><a href="#" class="rm-tgt"><span>&times;</span></a></span>
                                                        <span class="tgt-dual-itm"><span class="caret"></span>0.00000758<span class="perc">(0.0%)</span><a href="#" class="rm-tgt"><span>&times;</span></a></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="tgt-dual">
                                                        <span class="tgt-dual-itm">
                                                        	<span class="caret"></span>0.00000744<span class="perc">(0.0%)
                                                        	</span><a href="#" class="rm-tgt"><span>&times;
                                                        	</span></a></span>
                                                        <span class="tgt-dual-itm"><span class="caret"></span>0.00000744<span class="perc">(0.0%)</span><a href="#" class="rm-tgt"><span>&times;</span></a></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="tgt-dual">
                                                        <span class="tgt-dual-itm"><span class="caret"></span>0.00000758<span class="perc">(0.0%)</span><a href="#" class="rm-tgt"><span>&times;</span></a></span>
                                                        <span class="tgt-dual-itm"><span class="caret"></span>0.00000758<span class="perc">(0.0%)</span><a href="#" class="rm-tgt"><span>&times;</span></a></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="tgt-dual">
                                                        <span class="tgt-dual-itm"><span class="caret"></span>0.00000744<span class="perc">(0.0%)</span><a href="#" class="rm-tgt"><span>&times;</span></a></span>
                                                        <span class="tgt-dual-itm"><span class="caret"></span>0.00000744<span class="perc">(0.0%)</span><a href="#" class="rm-tgt"><span>&times;</span></a></span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="target-itm">
                                            <h3 class="buy-ttl">Stoploss Targets</h3>
                                            <ul>
                                                <li>
                                                    <div class="tgt-dual">
                                                        <span class="tgt-dual-itm"><span class="caret"></span>0.00000688<a href="#" class="rm-tgt"><span>&times;</span></a></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="tgt-dual">
                                                        <span class="tgt-dual-itm"><span class="caret"></span>0.00000758<a href="#" class="rm-tgt"><span>&times;</span></a></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="tgt-dual">
                                                        <span class="tgt-dual-itm"><span class="caret"></span>0.00000744<a href="#" class="rm-tgt"><span>&times;</span></a></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="tgt-dual">
                                                        <span class="tgt-dual-itm"><span class="caret"></span>0.00000758<a href="#" class="rm-tgt"><span>&times;</span></a></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="tgt-dual">
                                                        <span class="tgt-dual-itm"><span class="caret"></span>0.00000744<a href="#" class="rm-tgt"><span>&times;</span></a></span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
        )
    }
}
