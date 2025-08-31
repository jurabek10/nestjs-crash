import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MemberService {
	constructor(@InjectModel('Member') private readonly memberModel: Model<null>) {}

	public async signup(): Promise<string> {
		return 'Signup exctuted';
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
