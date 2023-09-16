import { SystemMessage } from "ai-jsx/core/conversation";

/*
  System Messages are how you better instruct the model how to behave and interact with users.
  In general, the more specific you can be, the more success you will have. We have included here
  some very basic instruction sets, but you'll want to create more clarity as you work through them.

  You can have multiple System Messages, and they will be concatenated together. This is useful if
  you want to give the model multiple sets of instructions.

  Note that we are including things in the System Message that are specific to the topic of foxes
  since that is what the example corpus contains. You will want to remove the fox specific things.
*/

const url = 'http://apilayer.net/api/live?access_key=ecf97d4fd99a7c3781222285b79ce9b1&currencies=AED,AFN,ALL,AMD,ANG,AOA,ARS,AUD,AWG,AZN,BAM,BBD,BDT,BGN,BHD,BIF,BMD,BND,BOB,BRL,BSD,BTC,BTN,BWP,BYR,BZD,CAD,CDF,CHF,CLF,CLP,CNY,COP,CRC,CUC,CUP,CVE,CZK,DJF,DKK,DOP,DZD,EGP,ERN,ETB,EUR,FJD,FKP,GBP,GEL,GGP,GHS,GIP,GMD,GNF,GTQ,GYD,HKD,HNL,HRK,HTG,HUF,IDR,ILS,IMP,INR,IQD,IRR,ISK,JEP,JMD,JOD,JPY,KES,KGS,KHR,KMF,KPW,KRW,KWD,KYD,KZT,LAK,LBP,LKR,LRD,LSL,LTL,LVL,LYD,MAD,MDL,MGA,MKD,MMK,MNT,MOP,MRO,MUR,MVR,MWK,MXN,MYR,MZN,NAD,NGN,NIO,NOK,NPR,NZD,OMR,PAB,PEN,PGK,PHP,PKR,PLN,PYG,QAR,RON,RSD,RUB,RWF,SAR,SBD,SCR,SDG,SEK,SGD,SHP,SLL,SOS,SRD,STD,SVC,SYP,SZL,THB,TJS,TMT,TND,TOP,TRY,TTD,TWD,TZS,UAH,UGX,USD,UYU,UZS,VEF,VND,VUV,WST,XAF,XAG,XAU,XCD,XDR,XOF,XPF,YER,ZAR,ZMK,ZMW,ZWL&source=USD&format=1'

export async function YourSidekickSystemMessage() {

  // @ts-expect-error
  const response = await fetch(url)

  const baseSystemMessage = (
    <SystemMessage>
      You are a finance travel assistant.  The user will ask you questions ....  Here is live data telling you what the conversion rates are { await response.text() }
    </SystemMessage>
  );

  return (
    <>
      {baseSystemMessage}
    </>
  );
}