import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Member } from '../../libs/dto/member/member';
import { MemberInput } from '../../libs/dto/member/member.input';

@Injectable()
export class MemberService {
	constructor(@InjectModel('Member') private readonly memberModel: Model<Member>) {}

	public async signup(input: MemberInput): Promise<Member> {
		try {
			const result = await this.memberModel.create(input);
			return result;
		} catch (error) {
			console.log('Error, Service.model', error);
			throw new BadRequestException(error);
		}
	}

	public async login(): Promise<string> {
		return 'Login exctuted';
	}

	public async updateMember(): Promise<string> {
		return 'updateMember exctuted';
	}

	public async getMember(): Promise<string> {
		return 'getMember exctuted';
	}
}
