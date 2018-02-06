<template>
  <el-form labelWidth="150px" size="small" :model="formData" :rules="spInfoRule" ref="spInfo" class="spInfo-form">
    <el-row :gutter="40">
      <el-col :span="12">
        <el-form-item label="企业名称" prop="spName">
          <el-input :disabled="preview==='preview'" v-model="formData.spName"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="联系人姓名" prop="contactName">
          <el-input :disabled="preview==='preview'" v-model="formData.contactName"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="企业类型" prop="spType">
          <el-radio-group :disabled="preview==='preview'" v-model="formData.spType+''">
            <el-radio v-for="item in spType" :key="item.label" :label="item.label">{{item.text}}</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="联系人手机号" prop="contactPhone">
          <el-input :disabled="preview==='preview'" v-model="formData.contactPhone"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item label="行业分类" prop="industryTypeCopy">
          <el-input v-model="formData.industryTypeCopy" style="display:none;"></el-input>
          <IndustryList :preview="preview==='preview'" :checkedList.sync="formData.industrys"/>
          <div class="m-t-10">
            <el-button><a href="https://baike.baidu.com/item/%E8%A1%8C%E4%B8%9A%E5%88%86%E7%B1%BB/2847868?fr=aladdin"
                          target="_blank">百度搜索行业分类</a></el-button>
          </div>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="帜讯销售姓名">
          <el-input :disabled="preview==='preview'" v-model="formData.customerManagerName"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="帜讯销售手机号">
          <el-input :disabled="preview==='preview'" v-model="formData.customerManagerPhone"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item label="备注">
          <el-input :disabled="preview==='preview'" type="textarea"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <div class="title text">
          <!--<span class="fr" style="cursor:pointer" @click="isExpend=!isExpend">{{isExpend?'收起':'展开'}}</span>-->
          <span class="line p-l-5">超管信息</span>
        </div>
      </el-col>
      <el-col :span="24">
        <el-form-item label="管理员手机号" prop="administratorMoblie">
          <el-input style="width:30%;margin-right:10px;" v-model="formData.administratorMoblie"></el-input>
          <el-checkbox label="同联系人手机号" v-model="syncPhone"></el-checkbox>
        </el-form-item>
      </el-col>
      <template v-if="isPlatformAccount">
        <el-col :span="12">
          <el-form-item label="管理员用户名" prop="administratorName">
            <el-input v-model="formData.administratorName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="管理员密码" prop="administratorPassword">
            <el-input :disabled="preview==='preview'" type="password" v-model="formData.administratorPassword"
                      style="width:30%"></el-input>
            <el-input :disabled="true" v-model="formData.administratorPassword"
                      style="width:30%;margin:0 10px;"></el-input>
            <el-button @click="handleMakeAdminPass" type="primary">生成密码</el-button>
          </el-form-item>
        </el-col>
      </template>
      <el-col :span="24">
        <div class="title text">
          <span class="fr" style="cursor:pointer" @click="isOpen=!isOpen">{{isOpen?'收起':'展开'}}</span>
          <span class="line p-l-5">附加信息</span>
        </div>
      </el-col>
      <template v-if="isOpen">
        <el-col :span="12">
          <el-form-item label="所在地域">
            <el-input v-model="formData.area"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="电子邮箱">
            <el-input v-model="formData.email"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="固定电话">
            <el-input v-model="formData.telephone"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="移动电话">
            <el-input v-model="formData.mobile"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="通信地址">
            <el-input v-model="formData.address"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="邮编">
            <el-input v-model="formData.zipCode"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="经办人姓名">
            <el-input v-model="formData.agentName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="">
            <el-input style="visibility: hidden;"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="经办人证件类型">
            <el-input v-model="formData.agentCertificateType"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="经办人证件号码">
            <el-input v-model="formData.agentCertificateNumber"></el-input>
          </el-form-item>
        </el-col>
      </template>
      <el-col :span="24">
        <div class="title">
          <span class="line p-l-5">资质信息</span>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item label="证件类型">
          <el-radio-group :disabled="preview==='preview'" v-model="fileData.certificateType">
            <el-radio v-for="item in cardType" :key="item.label" :label="item.label">{{item.text}}</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="40" v-show="fileData.certificateType==='1'">
      <el-col :span="12">
        <el-form-item label="统一社会信用代码">
          <el-input :disabled="preview==='preview'" placeholder="18位数字或者大写英文字母"
                    v-model="fileData.socialCreditCode"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item label="营业执照">
          <el-upload :action="action" :auto-upload="false" :limit="limit" :list-type="listType"
                     :before-upload="handleBusinessLicenseCertificate" name="businessLicenseCertificate"
                     ref="businessLicenseCertificate1">
            <el-button :disabled="preview==='preview'" size="mini" type="primary">点击上传</el-button>
            <span slot="tip" class="el-upload__tip m-l-20">支持2M以内的PNG、JPG格式文件</span>
          </el-upload>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="40" v-show="fileData.certificateType==='3'">
      <el-col :span="12">
        <el-form-item label="税务登记号">
          <el-input :disabled="preview==='preview'" placeholder="15位数字或者大写英文字母"
                    v-model="fileData.taxRegistrationNumber"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item label="税务登记证">
          <el-upload :action="action" :auto-upload="false" :limit="limit" :list-type="listType"
                     name="taxRegistrationCertificate" ref="taxRegistrationCertificate"
                     :before-upload="handleTaxRegistrationCertificate">
            <el-button :disabled="preview==='preview'" size="mini" type="primary">点击上传</el-button>
            <span slot="tip" class="el-upload__tip m-l-20">支持2M以内的PNG、JPG格式文件</span>
          </el-upload>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="营业执照注册号">
          <el-input :disabled="preview==='preview'" placeholder="15位数字或者大写英文字母"
                    v-model="fileData.businessLicenseNumber"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item label="营业执照证">
          <el-upload :action="action" :auto-upload="false" :limit="limit" :list-type="listType"
                     :before-upload="handleBusinessLicenseCertificate" name="businessLicenseCertificate"
                     ref="businessLicenseCertificate">
            <el-button :disabled="preview==='preview'" size="mini" type="primary">点击上传</el-button>
            <span slot="tip" class="el-upload__tip m-l-20">支持2M以内的PNG、JPG格式文件</span>
          </el-upload>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="组织机构代码">
          <el-input :disabled="preview==='preview'" placeholder="9位数字或者大写英文字母"
                    v-model="fileData.OrganizationCode"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item label="组织机构代码证">
          <el-upload :action="action" :auto-upload="false" :limit="limit" :list-type="listType"
                     :before-upload="handleOrganizationCodeCertificate" name="organizationCodeCertificate"
                     ref="organizationCodeCertificate">
            <el-button :disabled="preview==='preview'" size="mini" type="primary">点击上传</el-button>
            <span slot="tip" class="el-upload__tip m-l-20">支持2M以内的PNG、JPG格式文件</span>
          </el-upload>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="40">
      <el-col :span="24">
        <el-form-item label="其他证件">
          <el-upload :action="action" :auto-upload="false" :limit="10" :list-type="listType"
                     :before-upload="handleOtherCertificates" name="otherCertificates" ref="otherCertificates"
                     :multiple="true" :on-change="handleChange" :on-remove="handleRemove">
            <el-button :disabled="preview==='preview'" size="mini" type="primary">点击上传
            </el-button>
            <span slot="tip" class="el-upload__tip m-l-20">支持2M以内的PNG、JPG格式文件</span>
          </el-upload>
        </el-form-item>
      </el-col>
      <el-col :span="24" v-if="!preview" class="m-t-10">
        <el-form-item label=" ">
          <el-button type="primary" @click="next(2)">下一步</el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
  import IndustryList from '@/components/IndustryList/Industries.vue'
  import editMixin from '../../spManage/components/editMixin'
  import {
    Busi_check_spName,
    Busi_check_mobile,
    Busi_check_administrator_account,
    Busi_add_spInfo,
    Busi_add_channelInfo,
    Busi_add_accountInfo,
    Busi_upload_file,
    Busi_get_spInfo,
    Busi_add_qualification_info
  } from '@/api/business';

  const uploadName = {
    taxRegistrationCertificate: 'taxRegistrationCertificate', //税务登记证
    businessLicenseCertificate: 'businessLicenseCertificate', //营业执照证
    organizationCodeCertificate: 'organizationCodeCertificate', //组织机构代码证
    otherCertificates: 'otherCertificates', //其他证件
  };


  const validateContactName = (rule, value, callback) => {
    if (!value) {
      return callback(new Error('请填写联系人姓名'));
    }
    callback();
  };
  const validateContactPhone = (rule, value, callback) => {
    if (!value) {
      return callback(new Error('请填写联系人手机号'));
    }
    if (!/^1[3|4|5|7|8]\d{9}$/.test(value)) {
      return callback(new Error('手机号码格式错误'));
    }
    callback();
  };

  export default {
    name: "spInfo",
    data() {
      const validateAdministratorMoblie = async (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请填写管理员手机号'));
        }
        if (!/^1[3|4|5|7|8]\d{9}$/.test(value)) {
          return callback(new Error('手机号码格式错误'));
        }
        if(!this.formData.isValidate){
          return callback();
        }
        try {
          const result = await Busi_check_mobile({administratorMoblie: value});
          if (result.code === 200) {
            this.isPlatformAccount = true;
            callback();
          }
        } catch (e) {
          this.isPlatformAccount = false;
          callback(new Error('手机号码已存在'));
        }


      };
      const validateadministratorName = async (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请填写管理员用户名'));
        }

        if(!this.formData.isValidate){
          return callback();
        }

        try {
          const result = await Busi_check_administrator_account({administratorName: value});
          if (result.code === 200) {
            callback();
          }
        } catch (e) {
          callback(new Error('管理员用户名已存在'));
        }
      };
      const validateSpName = async (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请填写企业名称'));
        }
        if(!this.formData.isValidate){
          return callback();
        }
        try {
          const result = await Busi_check_spName({spName: value});
          if (result.code === 200) {
            callback();
          }
        } catch (e) {
          callback('企业名称已存在');
        }

      };
      return {
        spInfoRule: {
          spName: [{required: true, trigger: 'blur', validator: validateSpName}],
          contactName: [{required: true, trigger: 'blur', validator: validateContactName}],
          contactPhone: [{required: true, trigger: 'blur', validator: validateContactPhone}],
          administratorMoblie: [{required: true, trigger: 'blur', validator: validateAdministratorMoblie}],
          spType: [{required: true}],
          industryTypeCopy: [{required: true, message: '请选择行业信息'}],
          administratorPassword: [{required: true, message: '请填写管理员密码'}],
          administratorName: [{required: true, message: '请填写管理员用户名', validator: validateadministratorName}]
        },
        formData: {
          spId:'',
          spName: '',   // 企业名称
          contactName: '', // 企业联系人姓名
          contactPhone: '', // 企业联系人手机号
          spType: '1', //企业类型
          industryTypeCopy: '',
          industrys: [], //行业分类
          customerManagerName: '', //帜讯销售姓名
          customerManagerPhone: '', //帜讯销售手机号
          administratorName: '',//管理员账号
          administratorPassword: '', //管理员密码
          administratorMoblie: '', //管理员手机号
          area: '', //所在地域
          email: '',//电子邮箱
          telephone: '', //固定电话
          mobile: '', //移动电话
          address: '',//通信地址
          zipCode: '', //邮编
          agentName: '', //经办人姓名
          agentCertificateType: '',//经办人证件类型
          agentCertificateNumber: '', //经办人证件号码
          description: '',//备注
          isValidate:true
        },
        fileData: {
          certificateType: '1', //证件类型
          socialCreditCode: '',//统一社会信用代码
          taxRegistrationNumber: '',//税务登记号
          businessLicenseNumber: '',//营业执照注册号
          OrganizationCode: '', //组织机构代码
        },
        spType: [{text: '正式', label: '1'}, {text: '体验', label: '2'}, {text: '测试', label: '3'}, {
          text: '联通',
          label: '4'
        }],
        cardType: [{text: '三证合一（一照一码）', label: '1'}, {text: '三证分离', label: '3'}],
        isOpen: false,
        isExpend: false,
        syncPhone: false,
        isPlatformAccount: false,
        limit: 1,
        listType: 'picture',
        action: Busi_upload_file,
        upLoadForm: new FormData()
      }
    },
    mixins: [editMixin],
    components: {
      IndustryList
    },
    watch: {
      'formData.industrys'(newVal) {
        this.formData.industryTypeCopy = newVal.length > 0 ? newVal.length : '';
      },
      syncPhone(newVal) {
        if (newVal) {
          this.formData.administratorMoblie = this.formData.contactPhone;
        } else {
          this.formData.administratorMoblie = '';
        }
      }
    },
    methods: {
      next(step) {
        //this.$refs[uploadName.otherCertificates].submit()
        //Busi_add_qualification_info(this.upLoadForm)
        this.$refs['spInfo'].validate(async (valid) => {
          if (!valid) {
            return;
          }
          try {
            const result = await Busi_add_spInfo(Object.assign(this.formData));
            this.spId = result.data.enterpriseVO.spId;
            const {name,mobile} =result.data.userVO;
            const {spCode,spName}=result.data.enterpriseVO;
            IBSS.$emit('getSpId',this.spId);
            if (this.fileData.certificateType === '1') {
              this.$refs.businessLicenseCertificate1.submit();
            } else {
              this.$refs[uploadName.businessLicenseCertificate].submit();
              this.$refs[uploadName.taxRegistrationCertificate].submit();
              this.$refs[uploadName.organizationCodeCertificate].submit();
            }
            this.upLoadForm.append('spId', this.spId);
            this.upLoadForm.append('certificateType', this.fileData.certificateType);

            Busi_add_qualification_info(this.upLoadForm).then((res) => {
              if (res.code === 200) {
                this.$refs.spInfo.resetFields();
                this.$emit('handleNext', step,{name,mobile,spCode,spName});
                return;
              }
              throw res;
            }).catch((res) => {
              this.$message.error(res.message || '请求失败');
            });
          } catch (e) {

          }
        });


      },
      handleBeforUpload(file) {
        const isJPG = file.type === 'image/jpeg' || 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
          this.$message.error('上传头像图片只能是PNG、JPG格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      handleTaxRegistrationCertificate(file) {
        if (this.handleBeforUpload(file)) {
          this.upLoadForm.append(uploadName.taxRegistrationCertificate, file);
        }
        return false;
      },
      handleOtherCertificates(file) {
        console.log(file);
        if (this.handleBeforUpload(file)) {
          this.upLoadForm.append(uploadName.otherCertificates, file);
        }
        return true;
      },
      handleOrganizationCodeCertificate(file) {
        if (this.handleBeforUpload(file)) {
          this.upLoadForm.append(uploadName.organizationCodeCertificate, file);
        }
        return false;
      },
      handleBusinessLicenseCertificate(file) {

        if (this.handleBeforUpload(file)) {
          this.upLoadForm.append(uploadName.businessLicenseCertificate, file);
        }
        return false;
      },
      handleChange(file, fileList) {
        this.upLoadForm = new FormData();
        //debugger;
        // console.log(fileList,file);
        // this.upLoadForm.append('spId','18011114174820000988')
        // this.upLoadForm.append('certificateType','1')
        // this.upLoadForm.append('otherCertificates', file.raw);

        if (fileList.length) {
          fileList.forEach((item, i) => {
            this.upLoadForm.append('otherCertificates' + i, item.raw);
          })
        } else {
          this.upLoadForm.append('otherCertificates', null);
        }

      },
      handleRemove(file, fileList) {
        this.upLoadForm = new FormData();
        if (fileList.length) {
          fileList.forEach((item, i) => {
            this.upLoadForm.append('otherCertificates' + i, item.raw);
          })
        } else {
          this.upLoadForm.append('otherCertificates', null);
        }
      },
      handleMakeAdminPass() {
        const chars = "abcdefghijkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789";
        const charsLength = 8;

        let randomChars = "";
        for (let x = 0; x < charsLength; x++) {
          const i = Math.floor(Math.random() * chars.length);
          randomChars += chars.charAt(i);
        }
        this.formData.administratorPassword = randomChars;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .spInfo-form {
    padding-top:20px;
    .el-upload-list {
      width: 40%;
    }
    .el-input__inner{
      width:320px;
    }
  }

</style>
